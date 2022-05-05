import { Module } from "@nestjs/common"
import { GArticleService } from "./g-article.service"
import { GArticleResolver } from "./g-article.resolver"

@Module({
  providers: [GArticleResolver, GArticleService],
})
export class GArticleModule {}
