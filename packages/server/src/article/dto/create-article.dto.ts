import { IRankList } from "@ng-blog/shared-types"

export class CreateArticleDto implements IRankList {
  icon: string
  title: string
  items: { name: string }[]
}
