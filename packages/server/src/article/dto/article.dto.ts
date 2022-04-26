import { IBriefArticle, IRankList } from "@ng-blog/shared-types"

export class CreateArticleDto {}

export class HotArticlesDto implements IRankList {
  icon: string
  title: string
  items: { name: string }[]
}

export class BriefArticlesDto implements IBriefArticle {
  id: number
  title: string
  subTitle: string
  img: string
  createAtIcon: string
  createAt: string
  watchIcon: string
  watchCount: number
  commentIcon: string
  commentCount: number
  favorIcon: string
  favorCount: number
  authorIcon: string
  author: string
}
