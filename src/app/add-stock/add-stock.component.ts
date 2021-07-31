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
  message: any;


  constructor(private service: EStockMarketService) { }

  ngOnInit(): void {
  }

  public addStockNow() {
    let resp = this.service.doAddStock(this.stock, this.companyCode)
    resp.subscribe((data)=>this.message=data)

  }

}
