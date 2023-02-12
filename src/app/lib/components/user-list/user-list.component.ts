import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { User } from '@lib/interfaces';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
  imports: [MatIconModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  @Input() UserData: User | undefined;

  constructor() {}

  ngOnInit(): void {}
}
