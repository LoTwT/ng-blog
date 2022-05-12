import { Test, TestingModule } from "@nestjs/testing"
import { GAphorismService } from "./g-aphorism.service"

describe("GAphorismService", () => {
  let service: GAphorismService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GAphorismService],
    }).compile()

    service = module.get<GAphorismService>(GAphorismService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })
})
