import { Component, Inject, OnInit } from "@angular/core"
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog"
import { DataService } from "../data.service"

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
export class SideSearchDialog implements OnInit {
  response = ""

  constructor(
    public dialogRef: MatDialogRef<SideSearchDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.dataService
      .searchArticle(this.data)
      .subscribe((res) => (this.response = res.data))
  }

  closeDialog() {
    this.dialogRef.close()
  }
}
