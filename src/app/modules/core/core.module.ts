import { NgModule, Optional, SkipSelf } from '@angular/core';

import { DataService } from '../../services/data.service';
import { UserData } from '../../services/user-data.service';
import { AuthService } from '../../services/auth.service';
import { AuthGuard } from '../../guards/auth.guard';
import { RecipeData } from '../../services/recipe-data.service';
import { NutritionData } from '../../services/nutrition-data.service';
import { ModelFactory } from '../../services/factories/model.factory';
import { UploadService } from '../../services/uploads/shared/upload.service';
import { NotificationService } from '../../services/notification.service';

@NgModule({
  providers: [
    DataService,
    UserData,
    AuthService,
    AuthGuard,
    RecipeData,
    NutritionData,
    ModelFactory,
    UploadService,
    NotificationService,
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('Core module is already provided!');
    }
  }
}
