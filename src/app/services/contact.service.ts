import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public dataBase:AngularFirestore) { }

  getAllContactInfo()
  {
    return this.dataBase.collection("contactinfo",ref=>ref.orderBy("timeStamp","desc")).snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        console.log(data)
        return { id, ...data };
      }))
    );
  }

  deleteContactInfo(id)
  {
    {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.dataBase.collection("contactinfo").doc(id).delete();
          
        }
      })
    }
  }
}
