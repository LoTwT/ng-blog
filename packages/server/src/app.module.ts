import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ArticleModule } from "./article/article.module"
import { AphorismModule } from "./aphorism/aphorism.module"
import { AdvertisementModule } from "./advertisement/advertisement.module"
import { PrismaService } from "./prisma.service"

import { GraphQLModule } from "@nestjs/graphql"
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"
import { GArticleModule } from "./g-article/g-article.module"

@Module({
  imports: [
    ArticleModule,
    AphorismModule,
    AdvertisementModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    GArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
