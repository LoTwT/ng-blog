import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/prisma.service"
import {
  CreateAphorismInput,
  FindAphorismsInput,
  UpdateAphorismInput,
} from "./dto/g-aphorism.input"

@Injectable()
export class GAphorismService {
  constructor(private prisma: PrismaService) {}

  create(createAphorismInput: CreateAphorismInput) {
    return this.prisma.aphorism.create({ data: createAphorismInput })
  }

  findSome(findAphorismsInput?: FindAphorismsInput) {
    let param = {}

    if (findAphorismsInput) {
      const { skip, take } = findAphorismsInput

      if (
        typeof skip === "number" &&
        typeof take === "number" &&
        skip >= 0 &&
        take >= 0
      )
        param = { skip, take }
    }

    return this.prisma.aphorism.findMany({
      ...param,
    })
  }

  findOne(id: number) {
    return this.prisma.aphorism.findUnique({ where: { id } })
  }

  async update(updateGAphorismInput: UpdateAphorismInput) {
    return this.prisma.aphorism.update({
      where: { id: updateGAphorismInput.id },
      data: updateGAphorismInput,
    })
  }

  remove(id: number) {
    return this.prisma.aphorism.delete({
      where: { id },
    })
  }
}
