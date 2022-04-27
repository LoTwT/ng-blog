import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { IArticleCategory } from "@ng-blog/shared-types"
import { DataService } from "../data.service"

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.less"],
})
export class SidebarComponent implements OnInit {
  categories!: IArticleCategory[]
  currCategory: string = ""

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getArticleCategories().subscribe((data) => {
      this.categories = data
      this.currCategory = data[0].category
      this.dataService.setCategory(this.currCategory)
    })
  }

  onCategoryClick = (cate: string) => {
    if (this.router.url !== "/") this.router.navigateByUrl("/")
    this.currCategory = cate
    this.dataService.setCategory(this.currCategory)
  }
}
