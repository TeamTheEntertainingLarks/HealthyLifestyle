import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ArticleInterface } from '../../../interfaces/article';
import { Article } from '../../../models/article';
import { NutritionData } from '../../../services/nutrition-data.service';
import { ModelFactory } from './../../../services/factories/model.factory';
import { ModelFactoryInterface } from './../../../services/factories/interfaces/model.factory';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from '../../../services/notification.service';
import { Upload } from '../../../services/uploads/shared/upload';
import { UploadService } from '../../../services/uploads/shared/upload.service';

@Component({
  selector: 'app-create.article',
  templateUrl: './create.article.component.html',
  styleUrls: ['./create.article.component.css']
})
export class CreateArticleComponent implements OnInit {
  public article: ArticleInterface;
  public articleForm: FormGroup;
  public articleKey: string;

  public title: string;
  public description: string;
  public upload;

  public titleFormControl: AbstractControl;
  public descriptionFormControl: AbstractControl;

  constructor(
    private router: Router,
    private articleData: NutritionData,
    private factory: ModelFactory,
    private auth: AuthService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
    private uploadService: UploadService) {
    this.article = new Article();
  }

  ngOnInit() {
    this.titleFormControl = new FormControl('', [
      Validators.required]);

    this.descriptionFormControl = new FormControl('', [
      Validators.required]);

    this.articleForm = this.formBuilder.group({
      titleFormControl: this.titleFormControl,
      descriptionFormControl: this.descriptionFormControl,
    });
  }

  detectFile(event) {
    this.upload = event.target.files.item(0);
  }

  uploadFile() {
    console.log(this.articleKey);
    const file = this.upload;
    const dbPath = `${this.articleKey}/image`;
    console.log(dbPath);
    const storagePath = `${this.articleKey}/images`;
    console.log(storagePath);

    this.upload = new Upload(file);

    console.log(this.articleKey);
    return this.uploadService.uploadFile(storagePath, dbPath, this.upload);
  }

  onSubmit() {
    const author = this.auth.currentUser.displayName;
    const userId = this.auth.currentUser.uid;

    this.article = this.factory
      .createArticle(this.title, author, userId, Date.now(), this.description, null);

    this.articleData
      .addArticle(this.article)
      .then(articleKey => {
        console.log(this.articleKey);
        if (this.upload !== null) {
          this.articleKey = articleKey;
        }
      })
      .then(() => this.uploadFile()
        .then(() => this.router.navigateByUrl('/nutrition/all')));
    this.notificationService.popToast('info', 'Success!', 'Your article was created successfully!');

    console.log(this.article);
  }
}
