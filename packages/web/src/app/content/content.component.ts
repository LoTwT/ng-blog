import { Component, OnInit } from "@angular/core"
import { IBriefArticle } from "@ng-blog/shared-types"
import { DataService } from "../data.service"

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.less"],
})
export class ContentComponent implements OnInit {
  briefArticleList!: IBriefArticle[]

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getBriefArticleList("default")
      .subscribe((data) => (this.briefArticleList = data))
  }
}
