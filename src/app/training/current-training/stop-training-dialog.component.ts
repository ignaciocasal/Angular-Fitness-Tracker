import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CurrentTrainingComponent} from "./current-training.component";

@Component({
  selector: 'stop-training-dialog',
  template: '<h1 mat-dialog-title>Are you sure?</h1>' +
    '<mat-dialog-content>' +
    '<p>You already got {{ data.progress }}%</p>' +
    '</mat-dialog-content>' +
    '<mat-dialog-actions>' +
    '<button mat-button [mat-dialog-close]="true">Yes</button>' +
    '<button mat-button [mat-dialog-close]="false">No</button><' +
    '/mat-dialog-actions>'

})
export class StopTrainingDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<StopTrainingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  /*onNoClick(): void {
    this.dialogRef.close();
  }*/

}
