import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogModel } from './blogger.model';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.css']
})
export class BloggerComponent implements OnInit {
  // blogs:BlogModel[]| any;
  constructor(private blogService:BlogService, public router: Router) { }
  blogs:BlogModel[]| any;
  fNum=0;
  ngOnInit(): void {
    this.blogService.getBlog()
    .subscribe((data)=>{
      this.blogs=JSON.parse(JSON.stringify(data));
      console.log("blog= : "+this.blogs);
    })
  }
  followCount(numFollow:any){
    //alert(numFollow.follow)
    this.blogService.setFollow(numFollow);   
     window.location.reload(); 
  
  }
}
