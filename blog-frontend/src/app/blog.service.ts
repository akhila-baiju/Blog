import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public http:HttpClient) { }

  getBlog(){
    return this.http.get("http://localhost:3000/contents");
  }
  setLikes(likesNum: any)
  {
   // return this.http.post("http://localhost:3000/likes");
    return this.http.put("http://localhost:3000/likes",likesNum)
    .subscribe(data =>{console.log(data)})
  }
  setFollow(followNum: any)
  {//alert(followNum)
    return this.http.put("http://localhost:3000/follow",followNum)
    .subscribe(data =>{console.log(data)})
  }
  /*getComments()
  {
    return this.http.get("http://localhost:3000/comments");
  }*/
}
