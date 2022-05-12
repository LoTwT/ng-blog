import { Test, TestingModule } from "@nestjs/testing"
import { GAphorismResolver } from "./g-aphorism.resolver"
import { GAphorismService } from "./g-aphorism.service"

describe("GAphorismResolver", () => {
  let resolver: GAphorismResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GAphorismResolver, GAphorismService],
    }).compile()

    resolver = module.get<GAphorismResolver>(GAphorismResolver)
  })

  it("should be defined", () => {
    expect(resolver).toBeDefined()
  })
})
