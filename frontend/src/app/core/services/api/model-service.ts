import { inject, Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ModelConfig } from '../../interfaces/model-config-interface';
import { HttpClient } from '@angular/common/http';
import { AVAILABLE_MODELS } from '../ui/config-service';
import { ModelPaginationResponse } from '../../interfaces/offeset-pagination-interface';
import { ICreateModel } from '../../interfaces/create-model-interface';

@Injectable({
    providedIn: 'root',
})
export class ModelService {
    private readonly apiUrl = environment.apiUrl + '/models';
    private http = inject(HttpClient);
    private mock: ModelConfig[] = AVAILABLE_MODELS


    public getModels(page: number = 1, limit: number = 5): Observable<ModelPaginationResponse> {
        if (environment.mockeable) {
            const currentPage = Math.max(1, page);
            const startIndex = (currentPage - 1) * limit;
            const endIndex = startIndex + limit;

            const response: ModelPaginationResponse = {
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
        return this.http.get<ModelPaginationResponse>(`${this.apiUrl}?page=${page}&limit=${limit}`
        );
    }


    public createModel(newModel: ICreateModel): Observable<ModelConfig> {
        if (environment.mockeable) {
            const mockup: ModelConfig = {
                id: crypto.randomUUID(), // Generas un ID para simular que viene de DB
                model: newModel.model,
                provider: newModel.provider,
                defect: newModel.defect,
                status: newModel.status
            };
            this.mock.push(mockup);
            return of(mockup);
        }

        return this.http.post<ModelConfig>(this.apiUrl, newModel);
    }


    public updateModel(id: string, updatedModel: ICreateModel): Observable<ModelConfig> {
        if (environment.mockeable) {
            // Buscamos el índice del elemento en nuestro array mock
            const index = this.mock.findIndex(m => m.id === id);

            if (index === -1) {
                return throwError(() => new Error('Modelo no encontrado en mocks'));
            }
            const updatedMockup: ModelConfig = {
                ...this.mock[index],
                ...updatedModel
            };

            this.mock[index] = updatedMockup;
            return of(updatedMockup);
        }

        // Petición real al servidor (PUT)
        return this.http.put<ModelConfig>(`${this.apiUrl}/${id}`, updatedModel);
    }


    public deleteModel(id: string): Observable<void> {
        if (environment.mockeable) {
            // Buscamos el índice y lo eliminamos del array local
            const index = this.mock.findIndex(m => m.id === id);
            if (index !== -1) {
                this.mock.splice(index, 1);
            }
            return of(undefined);
        }
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    public getModelById(id: string): Observable<ModelConfig> {
        if (environment.mockeable) {
            const model = this.mock.find(m => m.id === id);
            return model ? of(model) : throwError(() => new Error('Model not found'));
        }
        return this.http.get<ModelConfig>(`${this.apiUrl}/${id}`);
    }

}