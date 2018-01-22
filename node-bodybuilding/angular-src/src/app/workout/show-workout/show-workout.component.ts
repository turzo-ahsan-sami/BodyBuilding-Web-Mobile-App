import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {AuthService} from "../../services/auth.service";
import { Router } from '@angular/router';


import { Workout } from '../workout';
import { WorkoutService } from '../../services/workout.service';
import {Exercise} from './exercise';

@Component({
  selector: 'app-show-workout',
  templateUrl: './show-workout.component.html',
  styleUrls: ['./show-workout.component.scss'],
})
export class ShowWorkoutComponent implements OnInit {

  constructor(
    private http: Http,
    protected authService:AuthService,
    public workoutService: WorkoutService,
    private router: Router,
    private route: ActivatedRoute,
  ){}

 @Input()
  workout: Workout;

  ngOnInit(){
    let workoutRequest = this.route.params
  }

}
