import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-manage-contact',
  templateUrl: './manage-contact.component.html',
  styleUrls: ['./manage-contact.component.scss']
})
export class ManageContactComponent implements OnInit {
allPost
  constructor(public contactservice:ContactService) { }

  ngOnInit(): void {
    this.contactservice.getAllContactInfo().subscribe(res => {
      console.log(res)
      this.allPost=res
    })
  }
  deleteInfo(postId)
  {
    this.contactservice.deleteContactInfo(postId);
  }
}
