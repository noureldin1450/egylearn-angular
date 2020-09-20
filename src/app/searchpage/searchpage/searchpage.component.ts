import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchpageComponent implements OnInit {

  constructor(private route:ActivatedRoute) {}

  year:number;
  term:number;
  grade:number;
  query:number;

  searchfor:string;
  iframeurl:string;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      console.log(params)
      this.year = params.year;
      this.grade = params.grade;
      this.term = params.term;
      this.query = params.query;

      this.makeiframe();
    });

  }
  
  makeiframe():void {  
    this.iframeurl = `https://www.youtube.com/embed?listType=search&list=${this.grade} ${this.term} ${this.query} ${this.year}&origin=http://egylearn.ga`;
    this.searchfor = `${this.grade} ${this.term} ${this.query} ${this.year}`;
  }

}
