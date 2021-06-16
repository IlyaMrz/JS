import { User, userProps } from "../models/User";
import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";
import { View } from "./View";

export class UserEdit extends View<User, userProps> {
    regionsMap(): { [key: string]: string } {
        return {
            userShow: ".user-show",
            userForm: ".user-form",
        };
    }
    onRender(): void {
        new UserShow(this.regions.userShow, this.model).render();
        new UserForm(this.regions.userForm, this.model).render();
    }
    template(): string {
        return `
            <div>
                <div class="user-show"></div>
                <br>
                <div class="user-form"></div>
            </div>
        `;
    }
}
