import { Component, Input, OnInit, ViewChild } from "@angular/core"
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
  @Input() swipers!: ISwiper[]

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

interface ISwiper {
  id: string
  title: string
  img: string
}
