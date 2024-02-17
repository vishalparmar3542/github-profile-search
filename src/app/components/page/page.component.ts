
import { Component, Input, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  Repostries:any;
  psize:number=10;
 @Input() user:any;
  currentpage=1;
  loading=true
  constructor(private apiService: ApiService){

  }
  ngOnInit():void{
    this.find(1);
  }
  ngOnChanges(changes: SimpleChanges):void{
      console.log(changes);
      this.find(1);
  }
  find(page:number){
    this.loading=true;
    this.currentpage=page;
    const val=JSON.parse(sessionStorage.getItem(this.user.repos_url+page+this.psize)!);
    if(!val)
    {
    this.apiService.getReposbypage(this.user.repos_url,page,this.psize).subscribe((res)=>
    {
      this.Repostries=res;
      sessionStorage.setItem(this.user.repos_url+this.currentpage+this.psize,JSON.stringify(res));
      console.log(this.Repostries)
      console.log(this.user)
      this.loading=false
    })
  }else{
    this.Repostries=JSON.parse(sessionStorage.getItem(this.user.repos_url+page+this.psize)!);
    this.loading=false
  }
  
  }
}
