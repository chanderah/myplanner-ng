import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { NgModule } from "@angular/core";
import { CookieModule } from "ngx-cookie";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NotfoundComponent } from "./demo/components/notfound/notfound.component";
import { CountryService } from "./demo/service/country.service";
import { CustomerService } from "./demo/service/customer.service";
import { EventService } from "./demo/service/event.service";
import { IconService } from "./demo/service/icon.service";
import { NodeService } from "./demo/service/node.service";
import { PhotoService } from "./demo/service/photo.service";
import { ProductService } from "./demo/service/product.service";
import { AppLayoutModule } from "./layout/app.layout.module";
import { UserService } from "./service/user.service";

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule, CookieModule.withOptions()],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService,
        CustomerService,
        EventService,
        IconService,
        NodeService,
        PhotoService,
        ProductService,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
