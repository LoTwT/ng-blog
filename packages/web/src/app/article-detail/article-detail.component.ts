import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router"
import { Nullable, IArticle } from "@ng-blog/shared-types"
import { DataService } from "../data.service"

@Component({
  selector: "article-detail",
  templateUrl: "./article-detail.component.html",
  styleUrls: ["./article-detail.component.less"],
})
export class ArticleDetailComponent implements OnInit {
  articleId!: number

  article!: Nullable<IArticle>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
  ) {
    this.route.paramMap.subscribe((p) => {
      const id = Number(p.get("id"))

      if (isNaN(id)) this.router.navigate(["/404"])
      else this.articleId = id
    })

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        window.scrollTo(0, 0)
      }
    })
  }

  ngOnInit(): void {
    this.dataService
      .getArticleDetail(this.articleId)
      .subscribe((data) => (this.article = data))
  }

  goBack = () => {
    this.router.navigate(["/"])
  }
}
