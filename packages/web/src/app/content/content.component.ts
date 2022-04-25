import { Component, OnInit } from "@angular/core"
import { IBriefArticle } from "src/types/article"

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.less"],
})
export class ContentComponent implements OnInit {
  // todo request
  briefArticleList: IBriefArticle[] = new Array(6).fill(0).map((_, index) => ({
    id: index,
    title: "Take me, Anywhere",
    subTitle: "带我走，去风里",
    img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F052420110515%2F200524110515-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653384807&t=87598e840ee20c2bc1d1d2fc5246b5b1",
    createAtIcon: "watch_later",
    createAt: "2018/7/19 上午",
    watchIcon: "visibility",
    watchCount: 207,
    commentIcon: "textsms",
    commentCount: 0,
    favorIcon: "favorite",
    favorCount: 8,
    authorIcon: "list",
    author: "这是一个作者",
  }))

  constructor() {}

  ngOnInit(): void {}
}
