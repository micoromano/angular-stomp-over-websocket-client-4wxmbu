import { Component, OnInit } from "@angular/core";
import { RxStompService } from "@stomp/ng2-stompjs";
import { topic } from "./stomp.cfg";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private stomp: RxStompService) {}

  ngOnInit(): void {
    this.stomp.watch(topic).subscribe(_ => console.log("MESSAGE:", _));
  }
}
