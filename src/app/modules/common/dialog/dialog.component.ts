import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { DialogType } from '../../../enums/dialogTypes';
import { EMAIL_REGEX } from '../../../common/constants';
import { Upload } from '../../../services/uploads/shared/upload';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  public header: string;
  public inputIncluded: boolean;
  public type: string;

  public oldEmail: string;
  public newEmail: string;
  public password: string;
  public upload: Upload;
  public selectedFiles: FileList;

  public changeEmailForm: FormGroup;
  public oldEmailFormControl: AbstractControl;
  public passwordFormControl: AbstractControl;
  public newEmailFormControl: AbstractControl;

  public changePictureForm: FormGroup;
  public pictureFormControl: AbstractControl;

  constructor(
    private dialogRef: MdDialogRef<DialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MD_DIALOG_DATA) public data: any) {
    this.header = this.data.header;
    this.inputIncluded = this.data.inputIncluded;
    this.type = this.data.type;

    this.isChangeEmailDialog(this.type);
    this.isChangePictureDialog(this.type);
  }

  isChangeEmailDialog(type) {
    if (type === DialogType.ChangeEmail) {
      this.createChangeEmailForm();
      return true;
    }

    return false;
  }

  createChangeEmailForm() {
    this.oldEmailFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)]);

    this.passwordFormControl = new FormControl('', [
      Validators.required]);

    this.newEmailFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)]);

    this.changeEmailForm = this.formBuilder.group({
      oldEmailFormControl: this.oldEmailFormControl,
      passwordFormControl: this.passwordFormControl,
      newEmailFormControl: this.newEmailFormControl,
    });
  }

  isChangePictureDialog(type) {
    if (type === DialogType.ChangePicture) {
      this.createChangePictureForm();
      return true;
    }

    return false;
  }

  uploadFile(files) {
    const file = files.item(0);
    this.upload = new Upload(file);
  }

  createChangePictureForm() {
    this.pictureFormControl = new FormControl('', [
      Validators.required]);

    this.changePictureForm = this.formBuilder.group({
      pictureFormControl: this.pictureFormControl,
    });
  }
}
