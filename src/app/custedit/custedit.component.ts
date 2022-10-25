import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-custedit',
  templateUrl: './custedit.component.html',
  styleUrls: ['./custedit.component.css']
})
export class CusteditComponent implements OnInit {
  customers:Customer[]=[];
  customer:Customer[]=[];
  constructor(private t:CustomerService) { }

  ngOnInit(): void {
  }
  listcustomers(event:any){
    this.t.Custdata().subscribe(customers =>{
      this.customers=customers;
    })
  }
  liscustomers(event:any){
    this.t.Custdata().subscribe(customer =>{
      this.customer=customer;
    })
  }
}
