export interface IBriefArticle {
  id: string
  title: string
  subTitle: string
  img: string
  // 创建时间
  createAtIcon: string
  createAt: string
  // 阅读数
  watchIcon: string
  watchCount: number
  // 评论数
  commentIcon: string
  commentCount: number
  // 点赞数
  favorIcon: string
  favorCount: number
  // 作者
  authorIcon: string
  author: string
}

export interface IArticle {
  title: string
  content: string
}

export interface IArticleCategory {
  icon: string
  category: string
  label: string
  hasDivider: boolean
}
