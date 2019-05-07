import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';
import { IPost } from '../shared/models/models';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public posts: IPost[] = [];
  public logged = false;
  public loading = false;
  public post1: IPost;
  public title: string = '';
  public body: string = '';
  public like_count: number;
  public created_at: Date;
  public login: any = '';
  public password: any = '';


  constructor(
    private provider: ProviderService
  ) { }

  ngOnInit() {
    if(this.logged){
      this.provider.getPosts().then(res => {
        this.posts = res;
      this.loading = true;
      });
  }
  }


  
  getPost(post: IPost){
    this.provider.getPost(post).then(res => {
      this.post1 = res;
    });
  }

  updatePost(c: IPost){
    this.provider.updatePost(c).then(res=>{
      console.log(c.title + ' updated');
    });
  }

  deletePost(c: IPost ){
    this.provider.deletePost(c.id).then(res=>{
      console.log(c.title + ' deleted');
      this.provider.getPosts().then(r=>{
        this.posts = r;
      });
    });
  }

  createPost(){
    if(this.title != '', this.body != '') {
      this.provider.createPost(this.title, this.body, this.like_count, this.created_at).then(res=>{
        this.title = '';
        this.body = '';
        this.created_at = null;
        this.like_count = 0;
        this.posts.push(res);
      });
    }
  }
  auth(){
    if (this.login != '' && this.password != '') {
      this.provider.auth(this.login, this.password).then(res=>{
        localStorage.setItem('token', res.token);
        this.logged = true;
        this.getPosts();
      });
    }
  }
  getPosts() {
    this.provider.getPosts().then(res => {
      this.posts = res;
      this.loading = true;
    });
  }

  likePost(post: IPost){
    this.provider.updatePost(post).then(res =>{
      post.like_count = post.like_count + 1;
    })
  }

}

