import { CommonModule } from '@angular/common';
import { Component, inject, model, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuItem, MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatCellDef, MatHeaderCellDef, MatHeaderRowDef, MatRowDef, MatTableModule } from '@angular/material/table';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatIcon } from '@angular/material/icon';
import { IUser } from '../../../core/interfaces/user-interface';
import { UserStore } from '../../../core/stores/user-store';
import { UserForm } from "./user-form/user-form";

@Component({
  selector: 'app-user-table',
  imports: [CommonModule, MatCellDef, MatHeaderCellDef,
    MatPaginator, MatRowDef, MatHeaderRowDef, MatProgressSpinner,
    MatTableModule, MatIcon, MatMenuModule, MatMenuTrigger, MatButtonModule, MatMenuItem, UserForm],
  templateUrl: './user-table.html',
  styleUrl: './user-table.scss',
})
export class UserTable {

  protected displayedColumns: string[] = ['actions', 'id', 'authId', 'name', 'email', 'role', 'status'];
  protected pageSize = signal(5);
  protected currentPage = signal(1);
  protected totalItems = signal(0);
  public isFormOpen = model<boolean | null>(null);
  public editableUser: IUser | null = null;
  protected userStore = inject(UserStore);

  ngOnInit() {
    this.userStore.loadUsers(this.currentPage(), this.pageSize());
  }


  onPageChange(event: PageEvent): void {
    this.currentPage.set(event.pageIndex + 1);
    this.pageSize.set(event.pageSize);
    this.userStore.loadUsers(this.currentPage(), this.pageSize());
  }


  protected getCellValue(element: any, col: string): any {
    ;
    return element[col] ?? '-';
  }


  goToEdit(user: IUser) {
    this.editableUser = user;
    this.isFormOpen.set(true);
  }

  onDelete(userId: string) {

  }
}
