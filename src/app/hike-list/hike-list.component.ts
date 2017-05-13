import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Hike } from '../hike.model';
import { HikeService } from '../hike.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-hike-list',
  templateUrl: './hike-list.component.html',
  styleUrls: ['./hike-list.component.css'],
  providers: [HikeService]
})
export class HikeListComponent implements OnInit {
  hikes: FirebaseListObservable<any[]>;

  constructor(private hikeService: HikeService, private router: Router) {
    this.hikes = this.hikeService.getHikes();
   }

  ngOnInit() {
  }

}
