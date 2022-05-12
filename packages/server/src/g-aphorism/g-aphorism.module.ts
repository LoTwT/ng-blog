import { Module } from "@nestjs/common"
import { GAphorismService } from "./g-aphorism.service"
import { GAphorismResolver } from "./g-aphorism.resolver"
import { PrismaService } from "src/prisma.service"

@Module({
  providers: [GAphorismResolver, GAphorismService, PrismaService],
})
export class GAphorismModule {}
