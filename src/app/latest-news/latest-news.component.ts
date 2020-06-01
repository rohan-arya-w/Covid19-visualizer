import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  confirmedDetails = [];
  deathDetails = [];
  recoveredDetails = [];
  dailyConfirmed = [];
  dailyDeceased = [];
  dailyRecovered = [];
  dates = [];

  chart1 = [];
  chart2 = [];
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.covid19india.org/data.json').subscribe(posts => {
      posts["cases_time_series"].forEach(element => {
        this.dates.push(element["date"]);
        this.confirmedDetails.push(element["totalconfirmed"]);
        this.deathDetails.push(element["totaldeceased"]);
        this.recoveredDetails.push(element["totalrecovered"]);
        this.dailyConfirmed.push(element["dailyconfirmed"]);
        this.dailyDeceased.push(element["dailydeceased"]);
        this.dailyRecovered.push(element["dailyrecovered"]);
      })
      this.chart1.push(new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.dates,
          datasets: [
            {
              label: "Confirmed",
              data: this.confirmedDetails,
              borderColor: '#0779e4',
              fill: false
            },
            {
              label: "Deceased",
              data: this.deathDetails,
              borderColor: '#ff0000',
              fill: false
            },
            {
              label: "Recovered",
              data: this.recoveredDetails,
              borderColor: '#639a67',
              fill: false
            }
          ]

        },
        options: {
          legend: {
            display: true,

            labels: {
              fontColor: "#000000"
            }
          },
          scales: {
            xAxes: [{ display: true }],
            yAxes: [{ display: true }]
          }
        }
      })
      )

      this.chart2.push(new Chart('canvas2', {
        type: 'line',
        
        data: {
          labels: this.dates,
          datasets: [
            {
              label: "Daily Confirmed",
              data: this.dailyConfirmed,
              
              borderColor: '#0779e4',
              fill:false
              
            },
            {
              label: "Daily Deceased",
              data: this.dailyDeceased,
              borderColor: '#ff0000',
              fill: false
            },
            {
              label: "Daily Recovered",
              data: this.dailyRecovered,
              borderColor: '#639a67',
              fill: false
            }
          ]

        },
        options: {
          legend: {
            display: true,

            labels: {
              fontColor: "#000000",
              
            }
          },
          scales: {
            xAxes: [{ display: true }],
            yAxes: [{ display: true }]
          }
        }
      })


      )


    })


  }
}
