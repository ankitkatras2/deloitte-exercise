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
  categories: any[] = [{ name: 'Accounting', key: 'A' }, { name: 'Marketing', key: 'M' }, { name: 'Production', key: 'P' }, { name: 'Research', key: 'R' }];
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

  getForm() {
    console.log(this.myFormGroup.value);
  }
}
