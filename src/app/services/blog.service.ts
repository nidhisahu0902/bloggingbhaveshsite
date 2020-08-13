import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public dataBase:AngularFirestore,public commoneService:CommonService) { }

  onAddPost(formData)
  {
    this.commoneService.showLoader();
    let timeStamp = new Date();
    let dataWithTimeStamp = formData
    let allData={timeStamp,...formData}
    this.dataBase.collection("Post").add(allData).then(res => {
      this.commoneService.showToast("success", "successFully", "Product Added");
      this.commoneService.stopLoader();
    }).catch(err => {
      this.commoneService.showToast("error","Error",err)
      return err;
    }).finally(() => {
      this.commoneService.stopLoader();
    })
  }
}
