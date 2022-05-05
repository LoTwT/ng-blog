import { ObjectType, Field, Int } from "@nestjs/graphql"

@ObjectType()
export class GArticle {
  @Field(() => Int, { description: "Example field (placeholder)" })
  exampleField: number
}
