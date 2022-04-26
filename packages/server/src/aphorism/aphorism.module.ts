import { Module } from "@nestjs/common"
import { AphorismService } from "./aphorism.service"
import { AphorismController } from "./aphorism.controller"

@Module({
  controllers: [AphorismController],
  providers: [AphorismService],
})
export class AphorismModule {}
