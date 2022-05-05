import { Injectable } from "@nestjs/common"
import { CreateGArticleInput } from "./dto/create-g-article.input"
import { UpdateGArticleInput } from "./dto/update-g-article.input"
import { GArticle } from "./entities/g-article.entity"

@Injectable()
export class GArticleService {
  create(createGArticleInput: CreateGArticleInput) {
    return "This action adds a new gArticle"
  }

  findAll() {
    return `This action returns all gArticle`
  }

  findOne(id: number): GArticle {
    return {
      exampleField: id,
    }
  }

  update(id: number, updateGArticleInput: UpdateGArticleInput) {
    return `This action updates a #${id} gArticle`
  }

  remove(id: number) {
    return `This action removes a #${id} gArticle`
  }
}
