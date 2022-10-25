import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-cust',
  templateUrl: './cust.component.html',
  styleUrls: ['./cust.component.css']
})
export class CustComponent implements OnInit {

  customers:Customer[]=[];
  constructor(private t:CustomerService) { }

  ngOnInit(): void {
  }

  printcustomers(event:any){
    this.t.Custdata().subscribe(customers =>{
      this.customers=customers;
    })
  }
}
