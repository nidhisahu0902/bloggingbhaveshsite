import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {
  allPost
  constructor(public blogService:BlogService,public commoneService:CommonService) { }

  ngOnInit(): void {
    this.blogService.getAllPost().subscribe(res => {
      this.allPost=res
    })
  }
  addPost(formData : NgForm) 
  {
    console.log(formData.value)
    let data=formData.value
    this.blogService.onAddPost(data)
    formData.resetForm();
  }
  deletePost(postId)
  {
      this.blogService.onDeltePost(postId)
  }
}
