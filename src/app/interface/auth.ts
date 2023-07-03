import { User } from "./user";

export interface Auth {
    id: number;

    user: User;
    password: string;
    token: string;
}
