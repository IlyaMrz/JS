import { User, userProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, userProps> {
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
}
