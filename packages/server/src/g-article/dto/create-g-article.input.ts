import { InputType, Int, Field } from "@nestjs/graphql"

@InputType()
export class CreateGArticleInput {
  @Field(() => Int, { description: "Example field (placeholder)" })
  exampleField: number
}
