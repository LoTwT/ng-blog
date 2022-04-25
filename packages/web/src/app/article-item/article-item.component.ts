import { Component, Input, OnInit } from "@angular/core"
import { Nullable } from "src/types"
import { IBriefArticle } from "src/types/article"

@Component({
  selector: "article-item",
  templateUrl: "./article-item.component.html",
  styleUrls: ["./article-item.component.less"],
})
export class ArticleItemComponent implements OnInit {
  @Input() article: Nullable<IBriefArticle> = null

  constructor() {}

  ngOnInit(): void {
    console.log(this.article)
  }
}
