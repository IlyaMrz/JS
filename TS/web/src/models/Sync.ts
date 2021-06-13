import axios, { AxiosPromise } from "axios";
import { userProps } from "./User";

export class Sync<T> {
    constructor(public rootUrl: string) {}
    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`);
    }

    save(data: userProps): AxiosPromise {
        const { id } = data;
        if (id) {
            return axios.put(`${this.rootUrl}/${id}`, data);
        } else {
            return axios.post(this.rootUrl, data);
        }
    }
}
