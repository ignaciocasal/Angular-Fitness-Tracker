import {Action} from "@ngrx/store";
import {Exercise} from "../models/exercise.model";

export const SET_TYPES_OF_EXERCISES = "[Training] Set Types Of Trainings"
export const SET_EXERCISES = "[Training] Set Trainings"
export const START_TRAINING = "[Training] Start Training"
export const STOP_TRAINING = "[Training] Stop Training"


export class SetTypesOfTrainings implements Action {
  readonly type = SET_TYPES_OF_EXERCISES

  constructor(public payload: Exercise[]) {
  }
}

export class SetExercises implements Action {
  readonly type = SET_EXERCISES
  constructor(public payload: Exercise[]) {
  }
}

export class StartTraining implements Action {
  readonly type = START_TRAINING
  constructor(public payload: Exercise) {
  }
}

export class StopTraining implements Action {
  readonly type = STOP_TRAINING
}

export type TrainingActions = SetTypesOfTrainings | SetExercises | StartTraining | StopTraining
