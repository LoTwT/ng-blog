import { ObjectType, Field, Int } from "@nestjs/graphql"

@ObjectType()
export class GAphorism {
  @Field(() => Int)
  id: number

  @Field(() => String)
  content: string

  @Field(() => String)
  createAt: string

  @Field(() => String)
  updateAt: string
}
