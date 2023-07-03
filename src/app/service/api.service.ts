import { Injectable } from "@angular/core";
import { Auth } from "../interface/auth";
import { UserConfig } from "../interface/user-config";
import { UserService } from "./user.service";

@Injectable({
    providedIn: "root"
})
export class ApiService {
    user = {} as UserConfig;
    bla = {} as Auth;

    constructor(private userService: UserService) {}
}
