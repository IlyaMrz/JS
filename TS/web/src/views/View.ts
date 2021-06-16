import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
    regions: { [key: string]: Element } = {};

    constructor(public parent: Element, public model: T) {
        this.bindModelRerender();
    }

    abstract template(): string;

    regionsMap(): { [key: string]: string } {
        return {};
    }

    eventMap(): { [key: string]: () => void } {
        return {};
    }

    bindModelRerender() {
        this.model.on("change", () => {
            this.render();
        });
    }
    bindEvents(fragment: DocumentFragment): void {
        const eventMap = this.eventMap();
        for (let eventKey in eventMap) {
            const [eventName, selector] = eventKey.split(":");

            fragment.querySelectorAll(selector).forEach((element) => {
                element.addEventListener(eventName, eventMap[eventKey]);
            });
        }
    }
    mapRegions(fragment: DocumentFragment): void {
        const regionsMap = this.regionsMap();

        for (let key in regionsMap) {
            const selector = regionsMap[key];
            const element = fragment.querySelector(selector);
            if (element) {
                this.regions[key] = element;
            }
        }
    }
    onRender(): void {}
    render(): void {
        this.parent.innerHTML = "";
        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);
        this.mapRegions(templateElement.content);

        this.onRender();

        this.parent.append(templateElement.content);
    }
}
