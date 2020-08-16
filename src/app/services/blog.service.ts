import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CommonService } from './common.service';
import { map } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public dataBase:AngularFirestore,public commoneService:CommonService,public storageService:StorageService,public storage:AngularFireStorage) { }

  onAddPost(formData,imgPath,imageEvent)
  {
    this.commoneService.showLoader();
    this.storageService.upload(imgPath,imageEvent).then(res => {
      let url = res
      let imagePath = imgPath
      console.log(res)
      let timeStamp = new Date();
      let dataWithTimeStamp = formData
      let allData={url,imagePath,timeStamp,...dataWithTimeStamp}
      this.dataBase.collection("Post").add(allData).then(res => {
        this.commoneService.showToast("success", "successFully", "Product Added");
      }).catch(err => {
        this.commoneService.showToast("error","Error",err)
        return err;
      }).finally(() => {
        this.commoneService.stopLoader();
      })
    })
  
  }

  getAllPost()
  {
    return this.dataBase.collection("Post",ref=>ref.orderBy("timeStamp","desc")).snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        console.log(data)
        return { id, ...data };
      }))
    );
  }

  async onDeltePost(id,path)
  { 
    this.commoneService.showLoader()
    console.log(path)
    await this.storage.ref(path).delete()
    this.dataBase.collection("Post").doc(id).delete().then(res=>{
      this.commoneService.showToast("success","Deleted!","Post Deleted Successful!")
    }).catch(err=>{
      this.commoneService.showToast("error","Error!",err)
    }).finally(()=>{
      this.commoneService.stopLoader()
    })
  }
}
