import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { IUser, UserUpdate, UserResponse } from "../../interfaces/user-interface";
import { DeleteChatsResponse } from "../../interfaces/delete-chats-response";
import { of } from 'rxjs';
import { UserPaginationResponse } from "../../interfaces/offeset-pagination-interface";

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private readonly apiUrl = environment.apiUrl;
    private http = inject(HttpClient);
    private mock: IUser[] = [
        {
            id: crypto.randomUUID(),
            authId: crypto.randomUUID(),
            name: 'Luis',
            email: 'Luis123@gmail.com',
            status: 'ACTIVE',
            role: 'user'
        },
        {
            id: crypto.randomUUID(),
            authId: crypto.randomUUID(),
            name: 'María',
            email: 'maria.gomez@gmail.com',
            status: 'ACTIVE',
            role: 'admin'
        },
        {
            id: crypto.randomUUID(),
            authId: crypto.randomUUID(),
            name: 'Carlos',
            email: 'carlos.rojas@gmail.com',
            status: 'INACTIVE',
            role: 'user'
        },
        {
            id: crypto.randomUUID(),
            authId: crypto.randomUUID(),
            name: 'Ana',
            email: 'ana.mora@gmail.com',
            status: 'ACTIVE',
            role: 'user'
        },
        {
            id: crypto.randomUUID(),
            authId: crypto.randomUUID(),
            name: 'José',
            email: 'jose.vargas@gmail.com',
            status: 'ACTIVE',
            role: 'moderator'
        },
        {
            id: crypto.randomUUID(),
            authId: crypto.randomUUID(),
            name: 'Sofía',
            email: 'sofia.ramirez@gmail.com',
            status: 'INACTIVE',
            role: 'user'
        }
    ];


    authUser(): Observable<UserResponse> {
        return this.http.post<UserResponse>(`${this.apiUrl}/users/auth`, {})
            .pipe(
                catchError((err) => {
                    return throwError(() => err);
                })
            );
    }

    deleteUserChats(
        userId: string,
        filters?: { type?: string, status?: boolean, olderThan?: number }
    ): Observable<DeleteChatsResponse> {

        let params = new HttpParams();
        if (filters?.type?.toLocaleLowerCase()) params = params.set('type', filters.type.toLocaleLowerCase());
        if (filters?.status !== undefined) params = params.set('status', filters.status.toString());
        if (filters?.olderThan) params = params.set('olderThan', filters.olderThan.toString());

        return this.http.delete<DeleteChatsResponse>(`${this.apiUrl}/users/${userId}/chats`, {
            params,
            withCredentials: true
        });
    }

    public getUsers(page: number = 1, limit: number = 5): Observable<UserPaginationResponse> {
        if (environment.mockeable) {
            const currentPage = Math.max(1, page);
            const startIndex = (currentPage - 1) * limit;
            const endIndex = startIndex + limit;

            const response: UserPaginationResponse = {
                sucess: true,
                data: this.mock.slice(startIndex, endIndex),
                pagination: {
                    total: this.mock.length,
                    page: currentPage,
                    limit: limit,
                    totalPages: Math.ceil(this.mock.length / limit)
                }
            };

            return of(response);
        }
        return this.http.get<UserPaginationResponse>(`${this.apiUrl}/users?page=${page}&limit=${limit}`
        );
    }


    public updateUser(id: string, updatedUser: UserUpdate): Observable<IUser> {
        if (environment.mockeable) {
            // Buscamos el índice del elemento en nuestro array mock
            const index = this.mock.findIndex(m => m.id === id);

            if (index === -1) {
                return throwError(() => new Error('Usuario no encontrado en mocks'));
            }
            const updatedMockup: IUser = {
                ...this.mock[index],
                ...updatedUser
            };

            this.mock[index] = updatedMockup;
            return of(updatedMockup);
        }

        // Petición real al servidor (PUT)
        return this.http.put<IUser>(`${this.apiUrl}/users/${id}`, updatedUser);
    }

}