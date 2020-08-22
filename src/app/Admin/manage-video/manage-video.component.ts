import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';

import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-manage-video',
  templateUrl: './manage-video.component.html',
  styleUrls: ['./manage-video.component.scss']
})
export class ManageVideoComponent implements OnInit {
  allVideo
  constructor(public videoService:VideoService) { }

  ngOnInit(): void {
    this.videoService.getAllVideo().subscribe(res => {
      this.allVideo=res
    })
  }
  saveVideo(formData : NgForm)
  {
    console.log(formData.value)
    this.videoService.onAddVideo(formData.value)
    formData.resetForm();
  }
  deletePost(postId)
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
           this.videoService.deleteVideoLink(postId)
        }
      })
  }


}
