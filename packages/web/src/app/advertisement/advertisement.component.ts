import { Component, OnInit } from "@angular/core"
import { IAdvertisement } from "@ng-blog/shared-types"
import { DataService } from "../data.service"

@Component({
  selector: "advertisement",
  templateUrl: "./advertisement.component.html",
  styleUrls: ["./advertisement.component.less"],
})
export class AdvertisementComponent implements OnInit {
  ad!: IAdvertisement

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.dataService.getAd().subscribe((data) => (this.ad = data))

    // this.dataService
    //   .getGAd(["img", "title", "annotation"])
    //   .subscribe((d) => (this.ad = d.data.ad))

    this.dataService
      .queryGraphql<"ad", keyof IGAd>("ad", ["img", "title", "annotation"])
      .subscribe((d) => {
        this.ad = d.data.ad
      })
  }
}

interface IGAd extends IAdvertisement {
  id: number
}
