import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
    Global=[]
    
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://api.covid19api.com/summary').subscribe(posts => {

      posts["Global"].forEach(i => {
        let obj = {};
        
        obj["Total"] = i["TotalConfirmed"];
        obj["deaths"] = i["TotalDeaths"];
        obj["recovered"] = i["TotalRecovered"];
        this.Global.push(obj);
        
      })
      this.Global.push(this.Global.shift());
      console.log(this.Global)
      
    })
  }

}
