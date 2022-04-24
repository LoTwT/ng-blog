import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.less"],
})
export class NavbarComponent implements OnInit {
  title = "</> SURMON"

  slogan = "欢喜勇猛，向死而生"

  constructor() {}

  ngOnInit(): void {}
}
