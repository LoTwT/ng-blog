import { Args, Mutation, Query, Resolver } from "@nestjs/graphql"
import { CreateGAdvertisementInput } from "./dto/create-g-advertisement.dto"
import { GAdvertisement } from "./entities/g-advertisement.entity"
import { GAdvertisementService } from "./g-advertisement.service"

@Resolver()
export class GAdvertisementResolver {
  constructor(private readonly gAdvertisementService: GAdvertisementService) {}

  @Query(() => GAdvertisement, { name: "ad" })
  async findOne() {
    return this.gAdvertisementService.findOne()
  }

  @Mutation(() => GAdvertisement)
  async createAd(@Args("ad") ad: CreateGAdvertisementInput) {
    return this.gAdvertisementService.createOne(ad)
  }
}
