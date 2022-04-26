import { Test, TestingModule } from "@nestjs/testing"
import { HotArticlesService } from "./hot-articles.service"

describe("HotArticlesService", () => {
  let service: HotArticlesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotArticlesService],
    }).compile()

    service = module.get<HotArticlesService>(HotArticlesService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })
})
