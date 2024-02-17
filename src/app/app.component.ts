import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit{
  title:string="Appcompo"
  data:any
  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() { 
  }
}
