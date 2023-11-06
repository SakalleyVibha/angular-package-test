import { Component, Input, OnInit } from "@angular/core";
@Component({
  selector: "rr-heading",
  template: ` <h1>{{ text }}</h1> `,
  styles: [],
})
export class HeadingComponent implements OnInit {
  ngOnInit(): void {
      throw new Error("Method not implemented.");
  }
  @Input() text = "";
}