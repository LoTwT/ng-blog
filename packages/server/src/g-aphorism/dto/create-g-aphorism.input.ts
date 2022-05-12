import { InputType, Field, Int } from "@nestjs/graphql"

export interface IGAphorism {
  id: number
  content: string
  createAt: string
  updateAt: string
}

@InputType()
export class CreateAphorismInput implements Pick<IGAphorism, "content"> {
  @Field(() => String)
  content: string
}

@InputType()
export class FindAphorismInput implements Pick<IGAphorism, "id"> {
  @Field(() => Int)
  id: number
}

@InputType()
export class FindAphorismsInput {
  @Field(() => Int, { nullable: true })
  count: number

  @Field(() => Int, { defaultValue: 0 })
  offset: number
}

@InputType()
export class UpdateAphorismInput implements Pick<IGAphorism, "id" | "content"> {
  @Field(() => Int)
  id: number

  @Field(() => String)
  content: string
}

@InputType()
export class RemoveAphorismInput implements Pick<IGAphorism, "id"> {
  @Field(() => Int)
  id: number
}
