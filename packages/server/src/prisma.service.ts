import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common"
import { PrismaClient } from "@prisma/client"

// 类型提示需要 npx prisma migrate dev --name init 后才会有
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect()
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on("beforeExit", async () => {
      await app.close()
    })
  }
}
