import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { IRankList } from "@ng-blog/shared-types"

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  getHotArticles = () => this.http.get<IRankList>("/api/article/hot")
}
