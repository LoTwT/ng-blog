import { Component, Input, OnInit } from "@angular/core"
import { Nullable, IBriefArticle } from "@ng-blog/shared-types"

@Component({
  selector: "article-item",
  templateUrl: "./article-item.component.html",
  styleUrls: ["./article-item.component.less"],
})
export class ArticleItemComponent implements OnInit {
  @Input() article: Nullable<IBriefArticle> = null

  constructor() {}

  ngOnInit(): void {}
}
