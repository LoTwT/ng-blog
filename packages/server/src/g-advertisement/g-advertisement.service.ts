import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/prisma.service"

const BASE_URL =
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg"

@Injectable()
export class GAdvertisementService {
  constructor(private prisma: PrismaService) {}

  async findOne() {
    const count = await this.prisma.advertisement.count()
    const randomId = (Math.floor(Math.random() * 10) % count) + 1

    const data = await this.prisma.advertisement.findUnique({
      where: {
        id: randomId,
      },
    })

    data.img = BASE_URL + data.img

    return data
  }
}
