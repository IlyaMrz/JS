import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
    constructor(public parent: Element, public model: T) {
        this.bindModelRerender();
    }
    abstract eventMap(): { [key: string]: () => void };
    abstract template(): string;

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
    render(): void {
        this.parent.innerHTML = "";
        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);

        this.parent.append(templateElement.content);
    }
}
