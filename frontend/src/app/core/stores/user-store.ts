import { Injectable, signal, inject } from '@angular/core';
import { IUser, UserUpdate } from '../interfaces/user-interface';
import { UserService } from '../services/api/user-service';
import { Pagination } from '../interfaces/offeset-pagination-interface';
import { catchError, Observable, tap, throwError } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserStore {
    private userService = inject(UserService);

    private _isLoading = signal<boolean>(false);
    public isLoading = this._isLoading.asReadonly();
    private _users = signal<IUser[]>([]);
    private _total = signal(0);
    private _pagination = signal<Pagination | null>(null);

    public user = this._users.asReadonly();
    public total = this._total.asReadonly();
    public pagination = this._pagination.asReadonly();

    loadUsers(page: number = 1, limit: number = 10) {
        if (this._isLoading()) return;

        this._isLoading.set(true);

        this._total.set(0);

        this.userService.getUsers(page, limit).subscribe({

            next: (response) => {
                this._users.set(response.data);
                this._total.set(response.pagination.total);
                this._pagination.set(response.pagination);
                this._isLoading.set(false);
            },
            error: () => {
                this._isLoading.set(false);
            }
        });
    }


    public updateUser(id: string, updatedUser: UserUpdate): Observable<UserUpdate> {
        this._isLoading.set(true);

        return this.userService.updateUser(id, updatedUser).pipe(
            tap((response) => {
                // Actualizamos la lista localmente
                this.setUser(response);
                this._isLoading.set(false);
                // Opcional: Recargar si necesitas asegurar sincronización total
                // this.loadModels(); 
            }),
            catchError((err) => {
                this._isLoading.set(false);
                return throwError(() => err);
            })
        );
    }


    private setUser(updatedUser: IUser): void {
        this._users.update(models => {
            return models.map(m => (m.id === updatedUser.id ? updatedUser : m));
        });
    }


}