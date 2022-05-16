import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import {
  IAdvertisement,
  IAphorism,
  IArticle,
  IArticleCategory,
  IBriefArticle,
  IRankList,
} from "@ng-blog/shared-types"
import { BehaviorSubject, from, Observable, of } from "rxjs"
import { useGraphql } from "ohmygraphql"

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  private _category = new BehaviorSubject<string>("")

  getCategory = () => {
    return this._category
  }

  setCategory = (cate: string) => this._category.next(cate)

  /**
   * 文章类别
   */
  getArticleCategories = () =>
    this.http.get<IArticleCategory[]>("/api/article/category")

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
   * 文章详情
   */
  getArticleDetail = (id: string) =>
    this.http.get<IArticle>(`/api/article/${id}`)

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

  // getGAd = <T extends keyof IGAd>(query: T[]) =>
  //   this.http.post<GAdResponse<typeof query>>("/api/graphql", {
  //     query: `{ad {${query.join(" ")}}}`,
  //   })

  queryGraphql = <T extends string, F extends string>(
    resource: T,
    fields: F[],
  ) => {
    const { body } = useGraphqlQuery(resource, fields)
    return this.http.post<GResponse<typeof resource, F>>(GRAPHQL_BASE_URL, body)
  }

  getGAphorisms = () => {
    const query = useGraphql<{
      id: number
      content: string
      createAt: string
      updateAt: string
    }>({
      operation: "query",
      params: {
        action: {
          type: "findAphorisms",
        },
        fields: ["id", "content"],
      },
    })

    return this.http.post(GRAPHQL_BASE_URL, { query })
  }
}

// interface IGAd extends IAdvertisement {
//   id: number
// }

// type GAdResponse<T extends string[]> = {
//   data: {
//     ad: Record<T[number], any>
//   }
// }

const GRAPHQL_BASE_URL = "/api/graphql"

const useGraphqlQuery = <T extends string>(resource: string, fields: T[]) => ({
  body: {
    query: `{${resource}{${fields.join(" ")}}}`,
  },
})

type GResponse<Resource extends string, Fields extends string> = {
  data: {
    [P in Resource]: Record<Fields, any>
  }
}
