import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TrainingService} from "../../services/training.service";
import {Exercise} from "../../models/exercise.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  typesOfExercises: Exercise[] = [];

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.typesOfExercises = this.trainingService.getTypesOfExercises()
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise)
  }

}
