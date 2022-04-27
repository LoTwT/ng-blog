import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common"
import { AdvertisementService } from "./advertisement.service"
import { AdvertisementDto } from "./dto/advertisement.dto"
import { UpdateAdvertisementDto } from "./dto/update-advertisement.dto"

@Controller("ad")
export class AdvertisementController {
  constructor(private readonly advertisementService: AdvertisementService) {}

  @Post()
  create(@Body() createAdvertisementDto: AdvertisementDto) {
    return this.advertisementService.create(createAdvertisementDto)
  }

  @Get()
  findRandomOne() {
    return this.advertisementService.findRandomOne()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.advertisementService.findOne(+id)
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateAdvertisementDto: UpdateAdvertisementDto,
  ) {
    return this.advertisementService.update(+id, updateAdvertisementDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.advertisementService.remove(+id)
  }
}
