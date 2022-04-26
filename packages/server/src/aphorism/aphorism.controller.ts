import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common"
import { AphorismService } from "./aphorism.service"
import { AphorismDto } from "./dto/aphorism.dto"
import { UpdateAphorismDto } from "./dto/update-aphorism.dto"

@Controller("aphorism")
export class AphorismController {
  constructor(private readonly aphorismService: AphorismService) {}

  @Post()
  create(@Body() aphorismDto: AphorismDto) {
    return this.aphorismService.create(aphorismDto)
  }

  @Get()
  find(@Query("count") count: string) {
    return this.aphorismService.find(+count)
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.aphorismService.findOne(+id)
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateAphorismDto: UpdateAphorismDto,
  ) {
    return this.aphorismService.update(+id, updateAphorismDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.aphorismService.remove(+id)
  }
}
