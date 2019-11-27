import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TrainingService} from "../../services/training.service";
import {Exercise} from "../../models/exercise.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['date', 'name', 'calories', 'duration', 'state'];
  dataSource = new MatTableDataSource<Exercise>()
  exercisesSubscription: Subscription;

  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private trainingService: TrainingService) {
  }

  ngOnInit() {
    this.exercisesSubscription = this.trainingService.exercisesChanged
      .subscribe((exercises: Exercise[]) => {
        this.dataSource.data = exercises
      })
    this.trainingService.fetchExercises()
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    if (this.exercisesSubscription){
      this.exercisesSubscription.unsubscribe()
    }
  }

}
