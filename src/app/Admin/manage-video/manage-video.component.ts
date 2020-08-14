import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    let videoUrl = formData.value
    this.videoService.onAddVideo(videoUrl)
    formData.resetForm();
  }
  deletePost(postId)
  {
      this.videoService.deleteVideoLink(postId)
  }


}
