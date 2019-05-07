import {EventEmitter, Injectable} from '@angular/core';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
import { IPost, IAuth } from '../models/models';
@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  constructor(http: HttpClient) {
    super(http);
  }

  getPosts(): Promise<IPost[]>{
    return this.get('http://localhost:8000/api/posts/', {});
  }

  getPost(post: IPost): Promise<IPost>{
   return this.get('http://localhost:8000/api/posts/' + post.id, {})
  }
  createPost(title:string, body:string, like_count:number, created_at:Date): Promise<IPost>{
    return this.post('http://localhost:8000/api/posts/', {
      title: title,
      body: body,
      like_count: like_count,
      created_at: created_at
    });
   }

   updatePost(post: IPost): Promise<IPost>{
    return this.put('http://localhost:8000/api/posts/' + post.id, {
      title: post.title,
      body: post.body,
    })
  }

  deletePost(xd: number): Promise<any>{
    return this.delet('http://localhost:8000/api/posts/' + xd, {});
  }

  auth(login: any, password: string): Promise<IAuth> {
    return this.post('http://localhost:8000/api/login/', {
      username: login,
      password: password
    });
  }

  logout(): Promise<any> {
   return this.post('http://localhost:8000/api/logout/', {});
 }



}