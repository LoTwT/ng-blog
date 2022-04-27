import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import {
  IAdvertisement,
  IAphorism,
  IBriefArticle,
  IRankList,
} from "@ng-blog/shared-types"

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  /**
   * 文章概要列表
   * @param { string } category todo construct enum
   */
  getBriefArticleList = (category: string) =>
    this.http.get<IBriefArticle[]>(`/api/article/brief/${category}`)

  /**
   * 热门文章
   */
  getHotArticleList = () => this.http.get<IRankList>("/api/article/hot")

  /**
   * 名言警句
   */
  getAphorismList = (count = 6) =>
    this.http.get<IAphorism[]>(`/api/aphorism?count=${count}`)

  /**
   * 搜索
   */
  searchArticle = (content: string) =>
    this.http.get<{ data: string }>(`/api/article/search?content=${content}`)

  /**
   * 广告
   */
  getAd = () => this.http.get<IAdvertisement>("/api/ad")
}
