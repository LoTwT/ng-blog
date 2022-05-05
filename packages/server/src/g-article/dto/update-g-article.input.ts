import { CreateGArticleInput } from "./create-g-article.input"
import { InputType, Field, Int, PartialType } from "@nestjs/graphql"

@InputType()
export class UpdateGArticleInput extends PartialType(CreateGArticleInput) {
  @Field(() => Int)
  id: number
}
