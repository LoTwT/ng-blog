import { Component, Inject, Input, OnInit } from "@angular/core"
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog"
import { IAphorism } from "@ng-blog/shared-types"

@Component({
  selector: "aphorism",
  templateUrl: "./aphorism.component.html",
  styleUrls: ["./aphorism.component.less"],
})
export class AphorismComponent implements OnInit {
  @Input() aphorisms!: IAphorism[]

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

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
