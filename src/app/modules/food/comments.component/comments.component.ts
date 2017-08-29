import { FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { UserInterface } from './../../../interfaces/user';
import { UserData } from '../../../services/user-data.service';
import { Recipe } from '../../../models/recipe';
import { RecipeData } from '../../../services/recipe-data.service';
import { RecipeInterface } from '../../../interfaces/recipe';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  // @Input() recipe: FirebaseListObservable<Recipe>;

  public user: UserInterface;
  public userId: string;
  public userFullName: string;
  public userImageUrl;
  public date: number;
  public textComment: string;
  public recipeKey: string;
  public recipe: RecipeInterface;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    public userService: UserData,
    private route: ActivatedRoute,
    private router: Router,
    private recipeDataService: RecipeData) {
    this.recipe = new Recipe();
    this.textComment = '';
  }

  ngOnInit() {
    this.userId = this.auth.currentUserId;
    this.date = Date.now();
    this.userService.getUserByUid(this.userId).subscribe((res) => {
      this.userImageUrl = res.profileImage;
      this.userFullName = res.firstName + ' ' + res.lastName;
      console.log(res);
    });
    this.recipeKey = this.route.snapshot.params['id'];
    this.recipeDataService.getRecipeById(this.recipeKey).subscribe((result) => this.recipe = result);
  }

  onSubmit() {
    const comment = {
      username: this.userFullName,
      date: this.date,
      profileImage: this.userImageUrl,
      textComment: this.textComment
    };

    console.log(comment);

    this.recipe.comments = this.recipe.comments || [];
    this.recipe.comments.push(comment);

    this.recipeDataService.editRecipe(this.recipeKey, this.recipe);

    this.textComment = '';

    this.router.navigate(['recipes/' + this.recipeKey]);
}

  isAuthenticated() {
    return this.auth.isAuthenticated;
}

}
