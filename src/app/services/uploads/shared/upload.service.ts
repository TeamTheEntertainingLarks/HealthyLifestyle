import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Upload } from './upload';
import * as firebase from 'firebase';

@Injectable()
export class UploadService {
  constructor(private db: AngularFireDatabase) { }

  uploads: FirebaseListObservable<Upload[]>;
  private usersPath = '/images/users';
  private recipesPath = 'images/recipes';
  private activitiesPath = '';
  private workoutsPath = '';

  uploadUserProfileImage(userId: string, path: string, upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.usersPath}/${userId}/${upload.file.name}`)
      .put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      () => {
        upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
      },
      () => {
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(path, upload);
      });
  }

  // getProfileImageUrl(userId: string) {
  //   const userStorageRef = firebase.storage().ref().child('images/users/' + userId + '_image.jpg');
  //   userStorageRef.getDownloadURL().then(url => {

  //   });
  // }

  private saveFileData(path: string, upload: Upload) {
    this.db.object(`${path}/`).set(upload);
  }

  // deleteUpload(path: string, upload: Upload) {
  //   this.deleteFileData(path, upload.$key)
  //     .then(() => {
  //       this.deleteFileStorage(upload.name);
  //     })
  //     .catch(error => console.log(error));
  // }

  // private deleteFileData(path: string, key: string) {
  //   return this.db.list(`${this.basePath}/`).remove(key);
  // }

  // private deleteFileStorage(name: string) {
  //   const storageRef = firebase.storage().ref();
  //   storageRef.child(`${this.basePath}/${name}`).delete();
  // }
}
