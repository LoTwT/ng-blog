import { Injectable } from "@nestjs/common"
import { AphorismDto } from "./dto/aphorism.dto"
import { UpdateAphorismDto } from "./dto/update-aphorism.dto"

const aphorisms: AphorismDto[] = [
  { content: "你像太阳，燃尽了我全部的精力。" },
  { content: "东风夜放花千树，更吹落、星如雨。" },
  { content: "宝马雕车香满路。" },
  { content: "凤箫声动，玉壶光转，一夜鱼龙舞。" },
  { content: "蛾儿雪柳黄金缕，笑语盈盈暗香去。" },
  { content: "众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。" },
]

@Injectable()
export class AphorismService {
  create(aphorismDto: AphorismDto) {
    return "This action adds a new aphorism"
  }

  find(count: number) {
    count = isNaN(count) ? 3 : count

    return aphorisms.slice(0, count)
  }

  findOne(id: number) {
    return `This action returns a #${id} aphorism`
  }

  update(id: number, updateAphorismDto: UpdateAphorismDto) {
    return `This action updates a #${id} aphorism`
  }

  remove(id: number) {
    return `This action removes a #${id} aphorism`
  }
}
