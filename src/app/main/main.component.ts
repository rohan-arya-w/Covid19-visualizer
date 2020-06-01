import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
    stateDetails=[];
    arr;
    a;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://api.covid19india.org/data.json').subscribe(posts => {
  
      posts["statewise"].forEach(i => {
        let obj = {};
        obj["stateName"] = i["state"];
        obj["confirmed"] = i["confirmed"];
        obj["deaths"] = i["deaths"];
        obj["recovered"] = i["recovered"];
        obj["active"] = i["active"];
        this.stateDetails.push(obj);
        
      })
      this.stateDetails.push(this.stateDetails.shift());
      console.log(this.stateDetails[1].stateName)
    })
  }

}
