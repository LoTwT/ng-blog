import { Component, Inject, Input, OnInit } from "@angular/core"
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog"
import { IAphorism } from "@ng-blog/shared-types"
import { DataService } from "../data.service"

interface IGAphorism {
  id: number
  content: string
  createAt: string
  updateAt: string
}

@Component({
  selector: "aphorism",
  templateUrl: "./aphorism.component.html",
  styleUrls: ["./aphorism.component.less"],
})
export class AphorismComponent implements OnInit {
  aphorisms!: IGAphorism[]

  constructor(private dialog: MatDialog, private dataService: DataService) {}

  ngOnInit(): void {
    // this.dataService
    //   .queryGraphql<"findAphorisms", keyof IGAphorism>("findAphorisms", [
    //     "id",
    //     "content",
    //   ])
    //   .subscribe(
    //     (d) =>
    //       (this.aphorisms = d.data.findAphorisms as unknown as IGAphorism[]),
    //   )

    this.dataService
      .getGAphorisms()
      .subscribe((d) => (this.aphorisms = (d as any).data.findAphorisms))
  }

  showDialog = () => this.dialog.open(AphorismDialog, { data: this.aphorisms })
}

@Component({
  selector: "aphorism-dialog",
  templateUrl: "./dialog/aphorism-dialog.html",
  styleUrls: ["./dialog/aphorism-dialog.less"],
})
export class AphorismDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IAphorism[]) {}
}
