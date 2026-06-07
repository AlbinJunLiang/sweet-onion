import { Routes } from '@angular/router';
import { ChatContainer } from './features/navbar/chat-container/chat-container';
import { InformationContainer } from './features/navbar/information-container/information-container';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  { path: 'chat/:id', component: ChatContainer },
  { path: 'chat', component: ChatContainer },
  { path: 'information', component: InformationContainer },
  {
    path: 'admin',
    canActivate: [adminGuard],
    children: [
      {
        path: 'users', // URL final: /admin/usuarios
        loadComponent: () => import('./features/admin/user-table/user-table').then(m => m.UserTable)
      },
      {
        path: 'models',
        loadComponent: () => import('./features/admin/model-table/model-table').then(m => m.ModelTable)
      },
      {
        path: '', // Ruta por defecto dentro de admin (si solo navegas a /admin)
        redirectTo: 'models',
        pathMatch: 'full'
      }
    ]
  },
  { path: '**', redirectTo: 'chat' }
];