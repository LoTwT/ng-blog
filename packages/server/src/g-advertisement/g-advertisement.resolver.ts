import { Query, Resolver } from "@nestjs/graphql"
import { GAdvertisement } from "./entities/g-advertisement.entity"
import { GAdvertisementService } from "./g-advertisement.service"

@Resolver()
export class GAdvertisementResolver {
  constructor(private readonly gAdvertisementService: GAdvertisementService) {}

  @Query(() => GAdvertisement, { name: "ad" })
  async findOne() {
    return this.gAdvertisementService.findOne()
  }
}
