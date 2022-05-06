import { Body, Controller, Get, Post } from "@nestjs/common"
import { Prisma } from "@prisma/client"
import { AdvertisementService } from "./advertisement.service"

@Controller("ad")
export class AdvertisementController {
  constructor(private readonly advertisementService: AdvertisementService) {}

  @Get()
  async findOne() {
    return this.advertisementService.findOne()
  }

  @Post()
  async createOne(@Body() data: Prisma.AdvertisementCreateInput) {
    return this.advertisementService.createOne(data)
  }
}
