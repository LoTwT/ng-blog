import { Module } from "@nestjs/common"
import { HotArticlesService } from "./hot-articles.service"
import { HotArticlesController } from "./hot-articles.controller"

@Module({
  controllers: [HotArticlesController],
  providers: [HotArticlesService],
})
export class HotArticlesModule {}
