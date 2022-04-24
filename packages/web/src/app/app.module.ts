import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { NavbarComponent } from "./navbar/navbar.component"
import { SidetoolsComponent } from "./sidetools/sidetools.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { SidebarComponent } from "./sidebar/sidebar.component"
import { MatButtonToggleModule } from "@angular/material/button-toggle"
import { ContentComponent } from "./content/content.component"
import { AddonComponent } from "./addon/addon.component"
import { AphorismComponent } from "./aphorism/aphorism.component"
import { SwiperComponent } from "./swiper/swiper.component"
import { ArticleItemComponent } from "./article-item/article-item.component"

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
