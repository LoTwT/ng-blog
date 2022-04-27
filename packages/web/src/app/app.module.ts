import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { AppRoutingModule } from "./app-routing.module"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonToggleModule } from "@angular/material/button-toggle"
import { MatCardModule } from "@angular/material/card"
import { MatNativeDateModule, MAT_DATE_LOCALE } from "@angular/material/core"
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatInputModule } from "@angular/material/input"
import { MatDialogModule } from "@angular/material/dialog"
import { HttpClientModule } from "@angular/common/http"

import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap"

import { AppComponent } from "./app.component"
import { NavbarComponent } from "./navbar/navbar.component"
import { SidetoolsComponent } from "./sidetools/sidetools.component"
import { SidebarComponent } from "./sidebar/sidebar.component"
import { ContentComponent } from "./content/content.component"
import { AddonComponent } from "./addon/addon.component"
import {
  AphorismComponent,
  AphorismDialog,
} from "./aphorism/aphorism.component"
import { SwiperComponent } from "./swiper/swiper.component"
import { ArticleItemComponent } from "./article-item/article-item.component"
import {
  SideSearchComponent,
  SideSearchDialog,
} from "./side-search/side-search.component"
import { RankListComponent } from "./rank-list/rank-list.component"
import { AdvertisementComponent } from "./advertisement/advertisement.component"
import { TagListComponent } from "./tag-list/tag-list.component"
import { ArticleDetailComponent } from "./article-detail/article-detail.component"
import { NotFoundComponent } from "./not-found/not-found.component"

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidetoolsComponent,
    SidebarComponent,
    ContentComponent,
    AddonComponent,
    AphorismComponent,
    SwiperComponent,
    ArticleItemComponent,
    SideSearchComponent,
    RankListComponent,
    AdvertisementComponent,
    TagListComponent,
    ArticleDetailComponent,
    NotFoundComponent,
    SideSearchDialog,
    AphorismDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    NgbCarouselModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: "zh-CN" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
