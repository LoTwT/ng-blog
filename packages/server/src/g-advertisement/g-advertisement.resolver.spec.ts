import { Test, TestingModule } from "@nestjs/testing"
import { GAdvertisementResolver } from "./g-advertisement.resolver"
import { GAdvertisementService } from "./g-advertisement.service"

describe("GAdvertisementResolver", () => {
  let resolver: GAdvertisementResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GAdvertisementResolver, GAdvertisementService],
    }).compile()

    resolver = module.get<GAdvertisementResolver>(GAdvertisementResolver)
  })

  it("should be defined", () => {
    expect(resolver).toBeDefined()
  })
})
