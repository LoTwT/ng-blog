import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { HotArticlesModule } from "./hot-articles/hot-articles.module"

@Module({
  imports: [HotArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
