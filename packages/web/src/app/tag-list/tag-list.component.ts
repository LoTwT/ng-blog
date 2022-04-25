import { Component, OnInit } from "@angular/core"

@Component({
  selector: "tag-list",
  templateUrl: "./tag-list.component.html",
  styleUrls: ["./tag-list.component.less"],
})
export class TagListComponent implements OnInit {
  tagList: ITag[] = [
    {
      icon: "home",
      name: "计算机",
      sum: 2,
    },
    {
      icon: "menu",
      name: "菜单",
      sum: 21,
    },
    {
      icon: "list",
      name: "列表",
      sum: 12,
    },
    {
      icon: "home",
      name: "web 开发",
      sum: 25,
    },
    {
      icon: "home",
      name: "机器学习",
      sum: 0,
    },
    {
      icon: "home",
      name: "Markdown",
      sum: 11,
    },
    {
      icon: "home",
      name: "计算机",
      sum: 2,
    },
    {
      icon: "menu",
      name: "菜单",
      sum: 21,
    },
    {
      icon: "list",
      name: "列表",
      sum: 12,
    },
    {
      icon: "home",
      name: "web 开发",
      sum: 25,
    },
    {
      icon: "home",
      name: "机器学习",
      sum: 0,
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}

interface ITag {
  icon: string
  name: string
  sum: number
}
