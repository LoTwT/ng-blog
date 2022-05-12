import { Module } from "@nestjs/common"
import { GAphorismService } from "./g-aphorism.service"
import { GAphorismResolver } from "./g-aphorism.resolver"

@Module({
  providers: [GAphorismResolver, GAphorismService],
})
export class GAphorismModule {}
