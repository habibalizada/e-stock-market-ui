import { Component, OnInit } from '@angular/core';
import { TransactionCompany } from '../model/transaction-company.model';
import { EStockMarketService } from '../service/e-stock-market.service';

@Component({
  selector: 'app-list-all-companies',
  templateUrl: './list-all-companies.component.html',
  styleUrls: ['./list-all-companies.component.css']
})
export class ListAllCompaniesComponent implements OnInit {

  responseCompanies: any;

  constructor(private service: EStockMarketService) { }

  ngOnInit(): void {
    this.service.getAllCompanies().subscribe((data)=>{
      console.warn(data)
      this.responseCompanies = data;
    })


  }

}
