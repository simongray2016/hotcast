import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Logo = 'src/assets/logo.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
