import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  name:any=''
   user:any='';
   repos:any='';
   psize:number=10
   intial=0;
   loading:boolean=false;
   errorMessage:any='';
   eprompt=false;
  constructor(
    private apiService: ApiService
  ) {
   
  }

 handlesearch (e:any){
    this.intial=1;
    console.log(e.value);
    this.name=e.value;
    this.loading=true;
    
  this.apiService.updateUser(e.value);

  const val=JSON.parse(sessionStorage.getItem(e.value)!);
            
  if(!val){
  this.apiService.getUser().pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
    this.errorMessage = error.message;
    console.error('There was an error!', error);
    // after handling error, return a new observable 
    // that doesn't emit any values and completes
    this.handleer();
    return of();
})).subscribe((res:any)=>{
      console.log(res);
      console.log("called");
    sessionStorage.clear();
    sessionStorage.setItem(this.name,JSON.stringify(res));
    console.log("Miss")
    // console.log(this.name)
    // console.log(sessionStorage.getItem(e.value))
   

    this.user=res
    // this.apiService.getRepos(this.user.repos_url).subscribe((res)=>{
    //   this.repos=res
      
    // })
    this.loading=false;
    this.eprompt=false;
  });
}else{
  console.log("hit")
  this.user=val;
  // this.apiService.getRepos(this.user.repos_url).subscribe((res)=>{
  //   this.repos=res
  //   console.log(res)
  // })
  this.eprompt=false;
  this.loading=false;
 
}

  e.value=""
}
 
  handleer(){
    this.loading=false;
    this.eprompt=true;
    this.intial=0;
    console.log("handled");
  }



}
