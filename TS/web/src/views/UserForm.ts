import { User } from "../models/User";

export class UserForm {
    constructor(public parent: Element, public model: User) {
        this.bindModelRerender();
    }

    bindModelRerender() {
        this.model.on("change", () => {
            this.render();
        });
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    };
    onSetNameClick = (): void => {
        let input = this.parent.querySelector("input");
        if (input) {
            const name = input.value;
            this.model.set({ name });
        }
    };

    eventMap(): { [key: string]: () => void } {
        return {
            "click:.set-age": this.onSetAgeClick,
            "click:.set-name": this.onSetNameClick,
        };
    }
    template(): string {
        return `
            <div>
                <h1>User Form</h1>
                <div>User name: <b>${this.model.get("name")}</b></div>
                <div>User age: <b>${this.model.get("age")}</b></div>
                <input />
                <button class="set-name">Change Name</button>
                <button class="set-age">Set Random Age</button>
            </div>
        `;
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
