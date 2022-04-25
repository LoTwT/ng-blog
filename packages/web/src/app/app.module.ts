import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppRoutingModule } from "./app-routing.module"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonToggleModule } from "@angular/material/button-toggle"
import { MatCardModule } from "@angular/material/card"
import { MatNativeDateModule } from "@angular/material/core"
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatInputModule } from "@angular/material/input"

import { AppComponent } from "./app.component"
import { NavbarComponent } from "./navbar/navbar.component"
import { SidetoolsComponent } from "./sidetools/sidetools.component"
import { SidebarComponent } from "./sidebar/sidebar.component"
import { ContentComponent } from "./content/content.component"
import { AddonComponent } from "./addon/addon.component"
import { AphorismComponent } from "./aphorism/aphorism.component"
import { SwiperComponent } from "./swiper/swiper.component"
import { ArticleItemComponent } from "./article-item/article-item.component"
import { SideSearchComponent } from "./side-search/side-search.component"
import { RankListComponent } from "./rank-list/rank-list.component"
import { AdvertisementComponent } from "./advertisement/advertisement.component"
import { TagListComponent } from "./tag-list/tag-list.component"

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
