import { CollectionView } from "./CollectinoView";
import { User, userProps } from "../models/User";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, userProps> {
    renderItem(model: User, itemParent: Element): void {
        new UserShow(itemParent, model).render();
    }
}
