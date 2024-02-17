import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() repo:any;
  @Input() user:any;
  @Input() loading:any;
  tags:any;
  constructor(private apiService: ApiService){
    // this.gettags();
  }
  ngOnInit(){
    // this.gettags();
  }

  // gettags(){
  //   console.log("getting tags")
  //    console.log(this.repo)
  //   const val=JSON.parse(sessionStorage.getItem(this.repo.labels_url)!);
  //   if(!val)
  //   {
  //   this.apiService.getlabels(this.repo.labels_url).subscribe((res)=>
  //   {
  //     this.tags=res;
  //     console.log(this.tags);
  //     sessionStorage.setItem(this.repo.labels_url,JSON.stringify(res));
      
  //   })
  // }else{
  //   this.tags=JSON.parse(sessionStorage.getItem(this.repo.labels_url)!);
  // }
  // }
}
