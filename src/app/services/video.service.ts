import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CommonService } from './common.service';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(public dataBase: AngularFirestore,public commonService:CommonService) { }
  
  onAddVideo(videoLink)
  {
    this.commonService.showLoader();
    let timeStamp = new Date();
    let Data={timeStamp,...videoLink}
    this.dataBase.collection("Videos").add(Data).then(res => {
      this.commonService.showToast("success", "successFully", "Video Added")
      this.commonService.stopLoader();
      
    }).catch(err => {
      this.commonService.showToast("error", "Error", err)
      return err;
      
    }).finally(() => {
      this.commonService.stopLoader();
      
    })
  }
  getAllVideo()
  {
    return this.dataBase.collection("Videos").snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        console.log(data)
        return { id, ...data };
      }))
    );
  }
  deleteVideoLink(id)
  {
    this.dataBase.collection("Videos").doc(id).delete()
  }
}
