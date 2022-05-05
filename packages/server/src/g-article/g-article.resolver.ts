import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql"
import { GArticleService } from "./g-article.service"
import { GArticle } from "./entities/g-article.entity"
import { CreateGArticleInput } from "./dto/create-g-article.input"
import { UpdateGArticleInput } from "./dto/update-g-article.input"

@Resolver(() => GArticle)
export class GArticleResolver {
  constructor(private readonly gArticleService: GArticleService) {}

  @Mutation(() => GArticle)
  createGArticle(
    @Args("createGArticleInput") createGArticleInput: CreateGArticleInput,
  ) {
    return this.gArticleService.create(createGArticleInput)
  }

  @Query(() => [GArticle], { name: "gArticle" })
  findAll() {
    return this.gArticleService.findAll()
  }

  @Query(() => GArticle, { name: "gArticle" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.gArticleService.findOne(id)
  }

  @Mutation(() => GArticle)
  updateGArticle(
    @Args("updateGArticleInput") updateGArticleInput: UpdateGArticleInput,
  ) {
    return this.gArticleService.update(
      updateGArticleInput.id,
      updateGArticleInput,
    )
  }

  @Mutation(() => GArticle)
  removeGArticle(@Args("id", { type: () => Int }) id: number) {
    return this.gArticleService.remove(id)
  }
}
