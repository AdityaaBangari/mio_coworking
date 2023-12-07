import {Component, OnInit} from '@angular/core';
declare var $: any; // Declare jQuery to use it in Angular
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {

  }
}
