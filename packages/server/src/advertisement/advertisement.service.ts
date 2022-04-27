import { Injectable } from "@nestjs/common"
import { IAdvertisement } from "@ng-blog/shared-types"
import { AdvertisementDto } from "./dto/advertisement.dto"
import { UpdateAdvertisementDto } from "./dto/update-advertisement.dto"

const ads: IAdvertisement[] = [
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F113020142315%2F201130142315-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653632494&t=9196e931a4683dafeb37d4cbe093b6e6",
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp06%2F191210214FI1c-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653632505&t=dc576a4d3337c04f7453ed90bd4159dc",
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp01%2F1ZZH250054149-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653632585&t=53edc81813e2274c08e33fe86840c51f",
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F0F420110430%2F200F4110430-6-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653632934&t=178f495727ea683e6060b95ed5c48733",
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F052420110515%2F200524110515-11-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653632923&t=368a280f48fe384e731287238e75d164",
].map((img, i) => ({
  title: `img${i + 1}`,
  img,
  annotation: `广告 ${i + 1}`,
}))

@Injectable()
export class AdvertisementService {
  create(createAdvertisementDto: AdvertisementDto) {
    return "This action adds a new advertisement"
  }

  findRandomOne(): IAdvertisement {
    const random = Math.floor(Math.random() * 10) % ads.length
    return ads[random]
  }

  findOne(id: number) {
    return `This action returns a #${id} advertisement`
  }

  update(id: number, updateAdvertisementDto: UpdateAdvertisementDto) {
    return `This action updates a #${id} advertisement`
  }

  remove(id: number) {
    return `This action removes a #${id} advertisement`
  }
}
