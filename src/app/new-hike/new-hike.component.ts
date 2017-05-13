import { Component, OnInit } from '@angular/core';
import { Hike } from '../hike.model';
import { HikeService } from '../hike.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-hike',
  templateUrl: './new-hike.component.html',
  styleUrls: ['./new-hike.component.css'],
  providers: [HikeService]
})
export class NewHikeComponent implements OnInit {

  constructor(private hikeService: HikeService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(hikeName: string, author: string, state: string, coordinates: string, difficulty: string) {
    var newHike: Hike = new Hike(hikeName, author, state, coordinates, difficulty);
    this.hikeService.addHike(newHike);
    this.router.navigate(['/hike-list']);
  }

}
