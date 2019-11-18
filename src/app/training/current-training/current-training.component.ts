import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StopTrainingDialogComponent} from "./stop-training-dialog.component";

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  @Output() trainingStop = new EventEmitter()
  progress = 0
  timer: number;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.timer = this.runProgress()
  }


  runProgress(){
    return setInterval(() => {
      this.progress += 5
      if (this.progress >= 100) {
        clearInterval(this.timer)
        this.trainingStop.emit()
      }
    }, 1000)
  }

  onStopTraining() {
    clearInterval(this.timer)
    this.openDialog()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StopTrainingDialogComponent, {
      width: '250px',
      data: {progress: this.progress}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        clearInterval(this.timer)
        this.trainingStop.emit()
      } else {
        this.timer = this.runProgress()
      }
    });
  }
}
