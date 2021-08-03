import { Company } from "./company.model";
import { Stock } from "./stock.model";

export class TransactionCompany {
  company: any
  stockRequest: any
  constructor(company: Company, stock: Stock){
    this.company = company
    this.stockRequest = stock
  }
}
