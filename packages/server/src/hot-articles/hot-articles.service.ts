import { Injectable } from "@nestjs/common"
import { CreateHotArticleDto } from "./dto/create-hot-article.dto"
import { UpdateHotArticleDto } from "./dto/update-hot-article.dto"

@Injectable()
export class HotArticlesService {
  create(createHotArticleDto: CreateHotArticleDto) {
    return "This action adds a new hotArticle"
  }

  findAll(): CreateHotArticleDto {
    return {
      icon: "list",
      title: "热门文章",
      items: new Array(10).fill(0).map((_, i) => ({
        name: `热门文章 ${i + 1}`,
      })),
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} hotArticle`
  }

  update(id: number, updateHotArticleDto: UpdateHotArticleDto) {
    return `This action updates a #${id} hotArticle`
  }

  remove(id: number) {
    return `This action removes a #${id} hotArticle`
  }
}
