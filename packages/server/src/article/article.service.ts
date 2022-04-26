import { Injectable } from "@nestjs/common"
import { CreateArticleDto } from "./dto/create-article.dto"
import { UpdateArticleDto } from "./dto/update-article.dto"

@Injectable()
export class ArticleService {
  create(createArticleDto: CreateArticleDto) {
    return "This action adds a new article"
  }

  findHot() {
    return {
      icon: "settings",
      title: "热门文章",
      items: new Array(10).fill(0).map((_, i) => ({
        name: `热门文章 ${i + 1}`,
      })),
    }
  }

  findAll() {
    return `This action returns all article`
  }

  findOne(id: number) {
    return `This action returns a #${id} article`
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`
  }

  remove(id: number) {
    return `This action removes a #${id} article`
  }
}
