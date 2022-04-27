import { Component, Inject, OnInit } from "@angular/core"
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog"

@Component({
  selector: "side-search",
  templateUrl: "./side-search.component.html",
  styleUrls: ["./side-search.component.less"],
})
export class SideSearchComponent implements OnInit {
  searchStr = ""

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  showDialog = () => {
    console.log(this.searchStr)

    const dialogRef = this.dialog.open(SideSearchDialog, {
      data: this.searchStr,
    })

    dialogRef.afterClosed().subscribe(() => {})
  }
}

@Component({
  selector: "side-search-dialog",
  templateUrl: "./dialog/side-search-dialog.html",
  styleUrls: ["./dialog/side-search-dialog.less"],
})
export class SideSearchDialog {
  constructor(
    public dialogRef: MatDialogRef<SideSearchDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  closeDialog() {
    this.dialogRef.close()
  }
}
