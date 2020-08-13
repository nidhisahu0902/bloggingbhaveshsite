import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addPost(formData : NgForm) 
  {
      console.log(formData.value)
  }
}
