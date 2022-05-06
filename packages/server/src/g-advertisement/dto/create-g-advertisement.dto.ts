import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class CreateGAdvertisementInput {
  @Field(() => String)
  title: string

  @Field(() => String)
  img: string

  @Field(() => String, { defaultValue: "广告" })
  annotation?: string
}
