import { Test, TestingModule } from "@nestjs/testing"
import { HotArticlesController } from "./hot-articles.controller"
import { HotArticlesService } from "./hot-articles.service"

describe("HotArticlesController", () => {
  let controller: HotArticlesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotArticlesController],
      providers: [HotArticlesService],
    }).compile()

    controller = module.get<HotArticlesController>(HotArticlesController)
  })

  it("should be defined", () => {
    expect(controller).toBeDefined()
  })
})
