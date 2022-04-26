import { IRankList } from "@ng-blog/shared-types"

export class CreateHotArticleDto implements IRankList {
  icon: string
  title: string
  items: { name: string }[]
}
