import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Stock } from '../model/stock.model';
import { EStockMarketService } from '../service/e-stock-market.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  stock: Stock = new Stock(0);
  companyCode: any;
  responseCompanies: any;
  alert: boolean = false


  constructor(
    private service: EStockMarketService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.service.getAllCompanies().subscribe((data)=>{
      this.responseCompanies = data;
    })
  }

  public addStockNow() {
    this.service.doAddStock(this.stock, this.companyCode).subscribe()
    this.alert = true
  }

  closeAlert(addCompanyForm: NgForm) {
    this.alert = false
    addCompanyForm.reset();
    this.router.navigate(['get-all-companies'])
  }

}
