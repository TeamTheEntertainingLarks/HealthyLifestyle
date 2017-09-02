import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-calorie-calculator',
  templateUrl: './calorie.calculator.component.html',
  styleUrls: ['./calorie.calculator.component.css']
})
export class CalorieCalculatorComponent implements OnInit {
  result;
  selectedValue;
  gender = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];
  activeness = ['Sedentary', 'Light Active', 'Moderately Active', 'Very Active', 'Extra Active'];

  constructor() { }

  ngOnInit() {
  }

  calculate(age, selectedValue, weight, height) {
    let calorie = 0;
    if (selectedValue === 'male') {
      calorie = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    } else {
      calorie = 655 + (9.6 * weight ) + (1.8 * height) - (4.7 * age);
    }

    this.result = `You need rouhgly ${calorie} calories a day to maintain your current weight.`;

    // console.log(age, selectedValue, weight, height);

  }
}
