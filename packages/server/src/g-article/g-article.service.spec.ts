import { Test, TestingModule } from "@nestjs/testing"
import { GArticleService } from "./g-article.service"

describe("GArticleService", () => {
  let service: GArticleService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GArticleService],
    }).compile()

    service = module.get<GArticleService>(GArticleService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })
})
