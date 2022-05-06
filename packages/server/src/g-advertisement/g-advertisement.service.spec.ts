import { Test, TestingModule } from "@nestjs/testing"
import { GAdvertisementService } from "./g-advertisement.service"

describe("GAdvertisementService", () => {
  let service: GAdvertisementService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GAdvertisementService],
    }).compile()

    service = module.get<GAdvertisementService>(GAdvertisementService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })
})
