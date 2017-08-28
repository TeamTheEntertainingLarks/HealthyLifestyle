import { ActivityInterface } from './../../../interfaces/activity';
import { Component, OnInit } from '@angular/core';
import { FormControl, AbstractControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Activity } from '../../../models/activity';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css'],
})
export class CreateActivityComponent implements OnInit {
  public recipeForm: FormGroup;
  public title: string;
  public category: string;
  public description: string;
  public location;
  public momentValue;
  public activity: ActivityInterface;

  public titleFormControl: AbstractControl;
  public authorFormControl: AbstractControl;
  public categoryFormControl: AbstractControl;
  public descriptionFormControl: AbstractControl;
  public locationFormControl: AbstractControl;
  public eventDateFormControl: AbstractControl;

  public categories = [
    'Bicycling',
    'Dancing',
    'Music Playing',
    'Running',
    'Educational',
    'Kids',
    'Water Activities',
    'Winter Activities',
    'Volunteer Activities'];

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.titleFormControl = new FormControl('', [
      Validators.required]);

    this.authorFormControl = new FormControl('', [
      Validators.required]);

    this.categoryFormControl = new FormControl('', [
      Validators.required]);

    this.descriptionFormControl = new FormControl('', [
      Validators.required]);

    this.locationFormControl = new FormControl('', [
      Validators.required]);

    this.eventDateFormControl = new FormControl('', [
      Validators.required]);


    this.recipeForm = this.formBuilder.group({
      titleFormControl: this.titleFormControl,
      authorFormControl: this.authorFormControl,
      categoryFormControl: this.categoryFormControl,
      descriptionFormControl: this.descriptionFormControl,
      locationFormControl: this.authorFormControl,
      eventDateFormControl: this.categoryFormControl,
      createdOnFormControl: this.descriptionFormControl,
    });
  }

  getLocation(place: Object) {
    this.location = place['formatted_address'];
    const location = place['geometry']['location'];
    const lat = location.lat();
    const lng = location.lng();
    console.log('Address Object', place);
  }

  public setMoment(moment: any): any {
    this.momentValue = moment;
    // Do whatever you want to the return object 'moment'
  }

  onSubmit() {

  }
}
