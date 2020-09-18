import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  val1: number = 50;
  myFormGroup: FormGroup;
  categories: any[] = [{ name: 'Lounge', key: 'L' }, { name: 'Table', key: 'M' }, { name: 'Chair', key: 'P' }, { name: 'Shelves', key: 'R' }];

  constructor(private fb: FormBuilder) {
    this.myFormGroup = fb.group({
      'collection': [],
      'color': [],
      'category': [],
      'price': []
    });
  }

  ngOnInit(): void {
  }

  handleChange(e) {
    //e.value is the new value
  }
}
