import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class HistoryCardComponent implements OnInit {
  @Input() HistoryData: any;
  @Output() deleteHistory: EventEmitter<any> = new EventEmitter();


  constructor() {}

  ngOnInit(): void {
  }

  delete(){
    this.deleteHistory.emit(this.HistoryData)
  }
}
