import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  stocks: Stock[] = []

  ngOnInit(): void {
    this.fecthStocks();
  }

  async fecthStocks(): Promise<void> {
    this.stocks = await this.dashboardService.getStocks();
    console.log(this.stocks);
  }

}
