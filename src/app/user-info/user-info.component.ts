import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Chart from 'chart.js';
import { element } from 'protractor';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  News =[];


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=eTvoqI60QKGOv70EGoAB69qINA7To1QS').subscribe(posts => {
  
      posts["results"].forEach(i => {
        let obj = {};
        obj["Title"] = i["title"];
        obj["img"] = i["multimedia[0].url"];
        obj["Abstract"] = i["abstract"];
       
        this.News.push(obj);
      })
      this.News.push(this.News.shift())
      console.log(this.News[1].img)
    })

  }
  }
