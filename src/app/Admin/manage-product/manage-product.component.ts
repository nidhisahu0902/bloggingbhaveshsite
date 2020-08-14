import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {
  allPost
  defaultImg: any = "assets/img/upload1.jpg";
  selectedImage: any = null;
  imagePath
  imageEvent
  constructor(public blogService:BlogService,public commoneService:CommonService) { }

  ngOnInit(): void {
    this.blogService.getAllPost().subscribe(res => {
      this.allPost=res
    })
  }
  processFile(event)
  {
    console.log(event)
    if(event.target.files && event.target.files[0])
    {
      const reader = new FileReader();
      reader.onload=(e:any) => this.defaultImg= e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.defaultImg=event.target.files[0];
      

    }
    else{
      this.defaultImg="assets/img/upload1.jpg";
      this.selectedImage=null;
    }
    let now = new Date()
    let rand= now.toString()
    let path = "postImages/1"+rand
    this.imagePath = path
  
    this.imageEvent = event.target.files[0];
  }
  addPost(formData : NgForm) 
  {
    console.log(formData.value)
    let data=formData.value
    this.blogService.onAddPost(data, this.imagePath, this.imageEvent)
    this.defaultImg="assets/img/upload1.jpg"

    this.selectedImage = null;
    formData.resetForm();
  }
  deletePost(postId,imgPath)
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
        this.blogService.onDeltePost(postId,imgPath)

        Swal.fire(
          'Deleted!',
          'Your product has been deleted.',
          'success'
        )
      }
    })
  }
}
