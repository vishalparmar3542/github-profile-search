import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 profile:any
 username:string;
 private clientid = 'a42dc5e43cfb59f74701';
 private clientsecret = 'ba408b7aeae168a36b51fc12d8b1b40284dd6b29';
  constructor(
    private httpClient: HttpClient
  ) {

    this.username="vishalparmar3542"
   }

  getUser() {
    const link='https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret;
  return this.httpClient.get(link);
  }
  // getRepos(link:string){
  //   return this.httpClient.get(link);
  // }
  updateUser(newuser:string){
  this.username=newuser;
  }

  getReposbypage(repos_url:string,page:number,page_size:number){
    console.log(page_size)
    const link=repos_url+'?page='+page+'&per_page='+page_size  + '&client_id=' + this.clientid + '&client_secret=' + this.clientsecret;
    return this.httpClient.get(link);
  }
  // getlabels(url:string){
  //   return this.httpClient.get(url);
  // }
  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
