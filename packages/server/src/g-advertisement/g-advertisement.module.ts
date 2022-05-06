import { Module } from "@nestjs/common"
import { GAdvertisementService } from "./g-advertisement.service"
import { GAdvertisementResolver } from "./g-advertisement.resolver"
import { PrismaService } from "src/prisma.service"

@Module({
  providers: [GAdvertisementResolver, GAdvertisementService, PrismaService],
})
export class GAdvertisementModule {}
