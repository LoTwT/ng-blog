import { Test, TestingModule } from "@nestjs/testing"
import { AphorismService } from "./aphorism.service"

describe("AphorismService", () => {
  let service: AphorismService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AphorismService],
    }).compile()

    service = module.get<AphorismService>(AphorismService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })
})
