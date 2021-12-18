import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories = [
    {
      img: '',
      title: 'News',
      selected: false,
    },
    {
      img: '',
      title: 'Art',
      selected: false,
    },
    {
      img: '',
      title: 'Crime',
      selected: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  trackByFn(index: number, _: any) {
    return index;
  }
}
