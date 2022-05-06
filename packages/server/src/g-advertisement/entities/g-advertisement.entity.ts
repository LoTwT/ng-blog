import { Field, Int, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class GAdvertisement {
  @Field(() => Int)
  id: number

  @Field(() => String)
  title: string

  @Field(() => String)
  img: string

  @Field(() => String)
  annotation: string
}
