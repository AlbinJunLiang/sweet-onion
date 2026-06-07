import { Injectable, signal, inject } from '@angular/core';
import { ModelService } from '../services/api/model-service';
import { ModelConfig } from '../interfaces/model-config-interface';
import { Pagination } from '../interfaces/offeset-pagination-interface';
import { ICreateModel } from '../interfaces/create-model-interface';
import { catchError, Observable, tap, throwError } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class ModelStore {

    private modelService = inject(ModelService);

    private _models = signal<ModelConfig[]>([]);
    private _loading = signal(false);
    private _total = signal(0);
    private _pagination = signal<Pagination | null>(null);

    public models = this._models.asReadonly();
    public isLoading = this._loading.asReadonly();
    public total = this._total.asReadonly();
    public pagination = this._pagination.asReadonly();



    loadModels(page: number = 1, limit: number = 10) {
        if (this._loading()) return;

        this._loading.set(true);

        this._total.set(0);

        this.modelService.getModels(page, limit).subscribe({

            next: (response) => {
                this._models.set(response.data);
                this._total.set(response.pagination.total);
                this._pagination.set(response.pagination);
                this._loading.set(false);
            },
            error: () => {
                this._loading.set(false);
            }
        });
    }


    // En tu ModelStore
    public createModel(newModel: ICreateModel): Observable<ModelConfig> {
        this._loading.set(true);
        return this.modelService.createModel(newModel).pipe(
            tap((response) => {
                this.addModel(response);
                this._loading.set(false);
                this.loadModels();
            }),
            catchError((err) => {
                this._loading.set(false);
                return throwError(() => err); // Pasamos el error al componente
            })
        );
    }

    public updateModel(id: string, updatedModel: ICreateModel): Observable<ModelConfig> {
        this._loading.set(true);

        return this.modelService.updateModel(id, updatedModel).pipe(
            tap((response) => {
                // Actualizamos la lista localmente
                this.setModel(response);
                this._loading.set(false);
                // Opcional: Recargar si necesitas asegurar sincronización total
                // this.loadModels(); 
            }),
            catchError((err) => {
                this._loading.set(false);
                return throwError(() => err);
            })
        );
    }

    public delete(id: string): Observable<void> {
        this._loading.set(true);

        return this.modelService.deleteModel(id).pipe(
            tap(() => {
                // Eliminamos de la lista localmente para que se vea instantáneo
                this._models.update(models => models.filter(m => m.id !== id));
                // Ajustamos el total
                this._total.set(Math.max(0, this._total() - 1));
                this._loading.set(false);
            }),
            catchError((err) => {
                this._loading.set(false);

                return throwError(() => err);
            })
        );
    }

    
    public deleteModel(id: string): void {
        this._models.update(models => {
            const filtered = models.filter(m => m.id !== id);
            // Actualizamos el total al eliminar
            this._total.set(filtered.length);
            return filtered;
        });
    }

    public setModel(updatedModel: ModelConfig): void {
        this._models.update(models => {
            return models.map(m => (m.id === updatedModel.id ? updatedModel : m));
        });
    }

    public addModel(newModel: ModelConfig): void {
        this._models.update(models => {
            const updatedList = [...models, newModel];
            this._total.set(updatedList.length);

            return updatedList;
        });
    }


    public resetModels(): void {
        this._models.set([]);
    }



}