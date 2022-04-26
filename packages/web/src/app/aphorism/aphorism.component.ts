import { Component, Input, OnInit } from "@angular/core"
import { IAphorism } from "@ng-blog/shared-types"

@Component({
  selector: "aphorism",
  templateUrl: "./aphorism.component.html",
  styleUrls: ["./aphorism.component.less"],
})
export class AphorismComponent implements OnInit {
  @Input() aphorisms!: IAphorism[]

  constructor() {}

  ngOnInit(): void {}
}
