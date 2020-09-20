import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private route:Router) {}

  query:string;
  year:number = 2020;
  grade:string = 'first-grade';
  term:string = 'first';
  domain:string = window.location.hostname;
  targetUrl:string; 
  
  ngOnInit(): void {}
  
  
  search(){
    if(this.query === '' || this.query === undefined){
      alert('!برجاء كتابه الماده او الدرس الذي تبحث عنه');
    }else{
      if(this.grade === 'first-grade'){
        this.grade = 'الاول الثانوي';
      }
      if(this.grade === 'secound-grade'){
        this.grade = 'الثاني الثانوي';
      }
      if(this.grade === 'thired-grade'){
        this.grade = 'الثالث الثانوي';
      }
  
      if(this.term === 'first'){
        this.term = 'التيرم الاول';
      }
      if(this.term === 'secound'){
        this.term = 'التيرم الثاني';
      }

      this.targetUrl = `/search?year=${this.year}&term=${this.term}&grade=${this.grade}&query=${this.query}`;
  
      // this.route.navigate(['/search',{year: 2020}]);
  
      window.open(this.targetUrl, '_top');
    }
  }

}
