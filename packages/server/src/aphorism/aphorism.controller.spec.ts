import { Test, TestingModule } from "@nestjs/testing"
import { AphorismController } from "./aphorism.controller"
import { AphorismService } from "./aphorism.service"

describe("AphorismController", () => {
  let controller: AphorismController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AphorismController],
      providers: [AphorismService],
    }).compile()

    controller = module.get<AphorismController>(AphorismController)
  })

  it("should be defined", () => {
    expect(controller).toBeDefined()
  })
})
