import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogModel } from './blog.model';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private blogService:BlogService, public router: Router) { }
  blogs:BlogModel[]| any;
 // 
  ngOnInit(): void {
    this.blogService.getBlog()
    .subscribe((data)=>{
      this.blogs=JSON.parse(JSON.stringify(data));
      console.log("blog= : "+this.blogs);
    })
  }
  likeIncrease(likesNum:any)
  {
     this.blogService.setLikes(likesNum);   
     window.location.reload(); 
  
  }
 

 
}
