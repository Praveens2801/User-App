import { Component } from '@angular/core';
import { AppService } from '../../../../core-utilities/common/services/app.service';

@Component({
  selector: 'app-user-data-table',
  templateUrl: './user-data-table.component.html',
  styleUrl: './user-data-table.component.scss'
})
export class UserDataTableComponent {

  users: any[] = [];
  totalItems = 0;
  totalPages = 0;
  currentPage = 1;
  pageSize = 10;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.appService.getUsers(this.currentPage, this.pageSize).subscribe(response => {
      this.users = response.data;
      this.totalItems = response.totalItems;
      this.totalPages = response.totalPages;
    });
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.fetchUsers();
  }
}
