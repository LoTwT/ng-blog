import { Component, Input, OnInit } from "@angular/core"
import { IRankList } from "@ng-blog/shared-types"

@Component({
  selector: "rank-list",
  templateUrl: "./rank-list.component.html",
  styleUrls: ["./rank-list.component.less"],
})
export class RankListComponent implements OnInit {
  @Input() rankList!: IRankList

  constructor() {}

  ngOnInit(): void {}
}
