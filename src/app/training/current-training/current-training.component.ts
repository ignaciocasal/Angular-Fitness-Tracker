import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StopTrainingDialogComponent} from "./stop-training-dialog.component";
import {TrainingService} from "../../services/training.service";

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  progress = 0
  timer: number;

  constructor(private trainingService: TrainingService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.timer = this.runProgress()
  }


  runProgress() {
    const step = this.trainingService.getRunningExercise().duration / 100 * 1000
    return setInterval(() => {
      this.progress += 1
      if (this.progress >= 100) {
        this.trainingService.completeExercise()
        clearInterval(this.timer)
      }
    }, step)
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
        this.trainingService.cancelExercise(this.progress)
        clearInterval(this.timer)
      } else {
        this.timer = this.runProgress()
      }
    });
  }
}
