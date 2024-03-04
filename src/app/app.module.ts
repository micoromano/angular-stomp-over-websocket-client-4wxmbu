import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import {
  InjectableRxStompConfig,
  RxStompService,
  rxStompServiceFactory
} from "@stomp/ng2-stompjs";
import { myRxStompConfig } from "./stomp.cfg";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  providers: [
    { provide: InjectableRxStompConfig, useValue: myRxStompConfig },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
