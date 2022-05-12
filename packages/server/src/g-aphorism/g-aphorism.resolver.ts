import { Resolver, Query, Mutation, Args } from "@nestjs/graphql"
import { GAphorismService } from "./g-aphorism.service"
import { GAphorism } from "./entities/g-aphorism.entity"
import {
  CreateAphorismInput,
  FindAphorismInput,
  FindAphorismsInput,
  RemoveAphorismInput,
  UpdateAphorismInput,
} from "./dto/create-g-aphorism.input"

@Resolver(() => GAphorism)
export class GAphorismResolver {
  constructor(private readonly gAphorismService: GAphorismService) {}

  @Mutation(() => GAphorism)
  createAphorism(
    @Args("createAphorismInput") createAphorismInput: CreateAphorismInput,
  ) {
    return this.gAphorismService.create(createAphorismInput)
  }

  @Query(() => [GAphorism])
  findAphorisms(
    @Args("findAphorismsInput") findAphorismsInput: FindAphorismsInput,
  ) {
    return this.gAphorismService.findSome(findAphorismsInput)
  }

  @Query(() => GAphorism)
  findAphorism(
    @Args("findAphorismInput") findAphorismInput: FindAphorismInput,
  ) {
    return this.gAphorismService.findOne(findAphorismInput.id)
  }

  @Mutation(() => GAphorism)
  updateAphorism(
    @Args("updateAphorismInput") updateAphorismInput: UpdateAphorismInput,
  ) {
    return this.gAphorismService.update(updateAphorismInput)
  }

  @Mutation(() => GAphorism)
  removeAphorism(
    @Args("removeAphorismInput") removeAphorismInput: RemoveAphorismInput,
  ) {
    return this.gAphorismService.remove(removeAphorismInput.id)
  }
}
