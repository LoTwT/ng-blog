import { Module } from "@nestjs/common"
import { AdvertisementService } from "./advertisement.service"
import { AdvertisementController } from "./advertisement.controller"
import { PrismaService } from "src/prisma.service"

@Module({
  controllers: [AdvertisementController],
  providers: [AdvertisementService, PrismaService],
})
export class AdvertisementModule {}
