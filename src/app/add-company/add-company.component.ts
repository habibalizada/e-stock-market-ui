import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company.model';
import { Stock } from '../model/stock.model';
import { TransactionCompany } from '../model/transaction-company.model';
import { EStockMarketService } from '../service/e-stock-market.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  company: Company = new Company('','','',0,'','');
  stockRequest: Stock = new Stock(0);
  transactionCompany: any;


  constructor(private service: EStockMarketService) { }

  ngOnInit(): void {
  }

  public registerCompany() {
    this.transactionCompany = new TransactionCompany(this.company, this.stockRequest);
    this.service.doRegisterCompany(this.transactionCompany).subscribe();
  }

}
