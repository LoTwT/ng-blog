import { Component, OnInit } from "@angular/core"
import { IRankList } from "@ng-blog/shared-types"
import { DataService } from "../data.service"

@Component({
  selector: "app-addon",
  templateUrl: "./addon.component.html",
  styleUrls: ["./addon.component.less"],
})
export class AddonComponent implements OnInit {
  hotArticles!: IRankList

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getHotArticleList()
      .subscribe((hotArticles) => (this.hotArticles = hotArticles))
  }
}
