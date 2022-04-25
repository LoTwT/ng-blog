import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { Nullable } from "src/types"

@Component({
  selector: "article-detail",
  templateUrl: "./article-detail.component.html",
  styleUrls: ["./article-detail.component.less"],
})
export class ArticleDetailComponent implements OnInit {
  articleId: Nullable<number> = null

  // todo request
  article: Nullable<IArticle> = null

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      const id = Number(p.get("id"))

      if (isNaN(id)) this.router.navigate(["/404"])
      else this.articleId = id
    })

    // mock
    this.article = {
      title: "文章标题",
      content: "这是文章的内容",
    }
  }
}

interface IArticle {
  title: string
  content: string
}
