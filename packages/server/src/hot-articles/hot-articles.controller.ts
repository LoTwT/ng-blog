import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common"
import { HotArticlesService } from "./hot-articles.service"
import { CreateHotArticleDto } from "./dto/create-hot-article.dto"
import { UpdateHotArticleDto } from "./dto/update-hot-article.dto"

@Controller("hot-articles")
export class HotArticlesController {
  constructor(private readonly hotArticlesService: HotArticlesService) {}

  @Post()
  create(@Body() createHotArticleDto: CreateHotArticleDto) {
    return this.hotArticlesService.create(createHotArticleDto)
  }

  @Get()
  findAll() {
    return this.hotArticlesService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.hotArticlesService.findOne(+id)
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateHotArticleDto: UpdateHotArticleDto,
  ) {
    return this.hotArticlesService.update(+id, updateHotArticleDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.hotArticlesService.remove(+id)
  }
}
