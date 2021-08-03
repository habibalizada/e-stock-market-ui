import { Component, OnInit } from '@angular/core';
import { ResponseStock } from '../model/response-stock.model';
import { EStockMarketService } from '../service/e-stock-market.service';

@Component({
  selector: 'app-find-a-company',
  templateUrl: './find-a-company.component.html',
  styleUrls: ['./find-a-company.component.css']
})
export class FindACompanyComponent implements OnInit {

  responseStoks:any
  responseStok:any
  responseCompanies: any
  companyCode: any
  startDate: any
  endDate: any
  min:any
  max:any
  ave:any
  comCode:any
  comName:any




  constructor(private service: EStockMarketService) { }

  ngOnInit(): void {
    this.service.getAllCompanies().subscribe((companies)=>{
      this.responseCompanies = companies
    })
  }

  public findStocksBetweenDates() {
    this.service.doFindStocksBetweenDates(this.companyCode, this.startDate, this.endDate)
    .subscribe((data)=>{
      // console.warn(data)
      this.responseStok = data
      this.responseStoks = this.responseStok.stocks
      // console.warn(this.responseStoks);
      this.min = this.responseStok.minPrice
      this.max = this.responseStok.maxPrice
      this.ave = this.responseStok.avePrice

    })
    for (let c of this.responseCompanies) {
      if(this.companyCode===c.company.code){
        this.comName = c.company.name
        this.comCode = this.companyCode
      }
    }

  }
}
