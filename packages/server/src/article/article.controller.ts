import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common"
import { ArticleService } from "./article.service"
import { CreateArticleDto } from "./dto/article.dto"
import { UpdateArticleDto } from "./dto/update-article.dto"

@Controller("article")
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto)
  }

  /**
   * 热门文章
   */
  @Get("hot")
  findHotList() {
    return this.articleService.findHotList()
  }

  /**
   * 文章概要列表
   */
  @Get("brief/:category")
  findBriefList(@Param("category") category: string) {
    return this.articleService.findBriefList(category)
  }

  /**
   * 搜索
   */
  @Get("search")
  search(@Query("content") content: string) {
    return this.articleService.search(content)
  }

  /**
   * 文章类别
   */
  @Get("category")
  getCategories() {
    return this.articleService.getCategories()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.articleService.findOne(id)
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.articleService.remove(+id)
  }
}
