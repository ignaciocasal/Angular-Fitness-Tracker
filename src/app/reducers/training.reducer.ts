import {SET_EXERCISES, SET_TYPES_OF_EXERCISES, START_TRAINING, STOP_TRAINING, TrainingActions} from "./training.actions";
import {Exercise} from "../models/exercise.model";

export interface State {
  typesOfExercises: Exercise[],
  exercises: Exercise[],
  activeTraining: Exercise,
}

const initialState: State = {
  typesOfExercises: [],
  exercises: [],
  activeTraining: null,
}

export function trainingReducer(state = initialState, action: TrainingActions) {
  switch (action.type) {
    case SET_TYPES_OF_EXERCISES:
      return {
        ...state,
        typesOfExercises: action.payload
      }
    case SET_EXERCISES:
      return {
        ...state,
        exercises: action.payload
      }
    case START_TRAINING:
      return {
        ...state,
        activeTraining: action.payload
      }
    case STOP_TRAINING:
      return {
        ...state,
        activeTraining: null
      }
    default:
      return state
  }
}

export const getTypesOfExercises = (state: State) => state.typesOfExercises
export const getExercises = (state: State) => state.exercises
export const getActiveTraining = (state: State) => state.activeTraining
