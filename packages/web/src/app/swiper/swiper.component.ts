import { Component, OnInit, ViewChild } from "@angular/core"
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from "@ng-bootstrap/ng-bootstrap"

@Component({
  selector: "swiper",
  templateUrl: "./swiper.component.html",
  styleUrls: ["./swiper.component.less"],
})
export class SwiperComponent implements OnInit {
  images: ISwiperImg[] = [1, 1, 1].map((i) => ({
    name: "image" + i,
    img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F052420110515%2F200524110515-11-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653462542&t=249b6116d96022c2d2052ee198a6e92f",
  }))

  currSlide = "123"

  paused = false
  pauseOnIndicator = false
  unpauseOnArrow = false
  pauseOnHover = true
  pauseOnFocus = false

  constructor() {}

  ngOnInit(): void {}

  @ViewChild("carousel", { static: true }) carousel!: NgbCarousel

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle()
    } else {
      this.carousel.pause()
    }
    this.paused = !this.paused
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused()
    }

    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused()
    }

    this.currSlide = slideEvent.current
  }
}

interface ISwiperImg {
  name: string
  img: string
}
