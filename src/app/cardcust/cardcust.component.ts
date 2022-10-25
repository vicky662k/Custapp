import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardcust',
  templateUrl: './cardcust.component.html',
  styleUrls: ['./cardcust.component.css']
})
export class CardcustComponent implements OnInit {

  malepath:String;
  constructor() {
    this.malepath="C:\Users\eyjfsaw29\Desktop\male.png";
   }

  ngOnInit(): void {
  }

}
