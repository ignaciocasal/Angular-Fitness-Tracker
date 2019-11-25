import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {TrainingService} from "../../services/training.service";
import {Exercise} from "../../models/exercise.model";
import {NgForm} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable, Subscription} from "rxjs";
import "rxjs-compat/add/operator/map";

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

  typesOfExercises: Exercise[];
  typesOfExercisesSubscription: Subscription;

  constructor(private trainingService: TrainingService) {
  }

  ngOnInit() {
    this.typesOfExercisesSubscription = this.trainingService.typesOfExercisesChanged
      .subscribe(exercises => this.typesOfExercises = exercises)
    this.trainingService.fetchTypesOfExercises()
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise)
  }

  ngOnDestroy(): void {
    this.typesOfExercisesSubscription.unsubscribe()
  }

}
