import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-sidetools",
  templateUrl: "./sidetools.component.html",
  styleUrls: ["./sidetools.component.less"],
})
export class SidetoolsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  backToTop = () => {
    window.scrollTo(0, 0)
  }
}
