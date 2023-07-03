import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { User } from "../interface/user";
import { AppConfig } from "../layout/service/app.layout.service";
import { fromBase64, toBase64 } from "./lib/base64";

@Injectable({
    providedIn: "root"
})
export class UserService {
    user = {} as User;
    userConfig = {} as AppConfig;

    constructor(private router: Router, private cookieService: CookieService) {
        // this.user = this.getUserData();
    }

    getUserData(): User {
        return JSON.parse(fromBase64(this.cookieService.get("user")));
    }

    setUserData(data: User) {
        this.cookieService.set("user", toBase64(data));
    }

    getUserConfig() {
        // return JSON.parse(fromBase64(localStorage.getItem("config") || "{}"));
        return "success";
    }

    setUserConfig(data: AppConfig) {
        localStorage.setItem("config", toBase64(data));
    }
}
