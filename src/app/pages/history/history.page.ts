import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HistoryCardComponent } from '@lib/components/history-card/history-card.component';
import { storage } from '@lib/utils';

import { BehaviorSubject } from 'rxjs';
@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, HistoryCardComponent],
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.css'],
})
export class HistoryPage implements OnInit {
  histotyData = new BehaviorSubject<any>(storage.getItem('App/search_history'));
  ngOnInit(): void {}

  removeHistory(data:any){
    let searchHistory = storage.getItem('App/search_history');

    searchHistory = searchHistory.filter((sh:any)=>(sh.id!=data.id))
    this.histotyData.next(searchHistory)
    storage.setItem('App/search_history',searchHistory)
  }
}
