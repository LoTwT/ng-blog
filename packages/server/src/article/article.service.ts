import { Injectable } from "@nestjs/common"
import { IArticle } from "@ng-blog/shared-types"
import {
  BriefArticlesDto,
  CreateArticleDto,
  HotArticlesDto,
} from "./dto/article.dto"
import { UpdateArticleDto } from "./dto/update-article.dto"

@Injectable()
export class ArticleService {
  create(createArticleDto: CreateArticleDto) {
    return "This action adds a new article"
  }

  findHotList(): HotArticlesDto {
    return {
      icon: "settings",
      title: "热门文章",
      items: new Array(10).fill(0).map((_, i) => ({
        name: `热门文章 ${i + 1}`,
      })),
    }
  }

  findBriefList(category: string): BriefArticlesDto[] {
    return new Array(6).fill(0).map((_, index) => ({
      id: index,
      title: `category:${category},id:${index}`,
      subTitle: "带我走，去风里",
      img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F052420110515%2F200524110515-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653384807&t=87598e840ee20c2bc1d1d2fc5246b5b1",
      createAtIcon: "watch_later",
      createAt: "2018/7/19 上午",
      watchIcon: "visibility",
      watchCount: 207,
      commentIcon: "textsms",
      commentCount: 0,
      favorIcon: "favorite",
      favorCount: 8,
      authorIcon: "list",
      author: "这是一个作者",
    }))
  }

  search(content: string) {
    return {
      data:
        (content
          ? `你搜索的内容是 [ ${content} ]`
          : "无效的搜索内容 或 错误的 query") +
        ` => 时间：${new Date().toLocaleString()}`,
    }
  }

  findOne(id: number): IArticle {
    return {
      title: `文章 #${id} 的标题`,
      content: `文章 ${id} 的内容`,
    }
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`
  }

  remove(id: number) {
    return `This action removes a #${id} article`
  }
}
