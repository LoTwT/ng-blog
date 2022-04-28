import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ArticleModule } from "./article/article.module"
import { AphorismModule } from "./aphorism/aphorism.module"
import { AdvertisementModule } from "./advertisement/advertisement.module"
import { PrismaService } from "./prisma.service"

@Module({
  imports: [ArticleModule, AphorismModule, AdvertisementModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
