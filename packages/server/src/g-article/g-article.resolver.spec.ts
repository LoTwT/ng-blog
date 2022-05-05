import { Test, TestingModule } from "@nestjs/testing"
import { GArticleResolver } from "./g-article.resolver"
import { GArticleService } from "./g-article.service"

describe("GArticleResolver", () => {
  let resolver: GArticleResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GArticleResolver, GArticleService],
    }).compile()

    resolver = module.get<GArticleResolver>(GArticleResolver)
  })

  it("should be defined", () => {
    expect(resolver).toBeDefined()
  })
})
