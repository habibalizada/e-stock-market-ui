import { Component, OnInit } from '@angular/core';
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


  constructor(private service: EStockMarketService) { }

  ngOnInit(): void {
    this.service.getAllCompanies().subscribe((data)=>{
      this.responseCompanies = data;
    })
  }

  public addStockNow() {
    this.service.doAddStock(this.stock, this.companyCode).subscribe()
  }

}
