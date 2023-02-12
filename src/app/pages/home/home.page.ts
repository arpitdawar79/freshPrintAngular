import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserListComponent } from '@lib/components/user-list/user-list.component';
import { GithubService } from '@lib/services/github/github.service';
import { storage } from '@lib/utils';
import { nanoid } from 'nanoid';

import { BehaviorSubject } from 'rxjs';
@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, UserListComponent],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
export class HomePage implements OnDestroy {
  // currentTheme!: AppTheme | null;
  searchForm: UntypedFormGroup;
  loading = new BehaviorSubject<boolean>(false);
  userList: any | undefined;
  userListSubscription: any;
  // private searchUsers = debounce((searchTerm: string)=>(this.userList$ = ),500)

  // private _destroy$ = new Subject();

  constructor(public formBuilder: UntypedFormBuilder, public githubService: GithubService) {
    this.searchForm = this.formBuilder.group({
      searchInput: [{ value: null, disabled: false }, Validators.required],
    });
    this.userListSubscription = this.githubService
      .getUserSearchResult(this.searchForm.controls['searchInput'].value)
      .subscribe((data) => {
        this.userList = data;
      });
  }

  ngOnDestroy(): void {
    this.userListSubscription.unsubscribe();
  }

  onFormSubmit(event: any): void {
    this.userListSubscription = this.githubService
      .getUserSearchResult(this.searchForm.controls['searchInput'].value)
      .subscribe((data) => {
        this.userList = data;
        const historyObj = {
          search_key: this.searchForm.controls['searchInput'].value,
          result: data,
          id:nanoid(),
        };
        let searchHistory = storage.getItem('App/search_history');
        console.log(searchHistory);
        if (searchHistory) {
          searchHistory.push(historyObj);
        } else {
          searchHistory = [historyObj];
        }
        storage.setItem('App/search_history', searchHistory);
      });
  }
}
