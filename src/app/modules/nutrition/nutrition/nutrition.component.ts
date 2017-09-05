import { Component, OnInit } from '@angular/core';

import { NutritionInterface } from '../../../interfaces/nutrition';
import { NutritionData } from '../../../services/nutrition-data.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent implements OnInit {
  public nutrition: Array<NutritionInterface>;
  public meal;
  public articles;

  constructor(public nutritonDataService: NutritionData, public auth: AuthService) { }

  ngOnInit() {
    this.nutritonDataService.getAllArticles().subscribe(items => {
      this.articles = items;
    });

    this.nutritonDataService.getAllMeals().subscribe(items => {
      this.meal = items;
    });

  }

}
