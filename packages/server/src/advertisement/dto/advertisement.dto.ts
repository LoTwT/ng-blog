import { IAdvertisement } from "@ng-blog/shared-types"

export class AdvertisementDto implements IAdvertisement {
  title: string
  img: string
  annotation: string
}
