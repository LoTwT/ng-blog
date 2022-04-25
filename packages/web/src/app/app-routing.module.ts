import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ArticleDetailComponent } from "./article-detail/article-detail.component"
import { ContentComponent } from "./content/content.component"
import { NotFoundComponent } from "./not-found/not-found.component"

const routes: Routes = [
  { path: "", component: ContentComponent },
  { path: "article/:id", component: ArticleDetailComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
