import { Routes } from '@angular/router';
import { LogPanelComponent } from './MyComponents/log-panel/log-panel.component';
import { AdminPanelComponent } from './MyComponents/admin-panel/admin-panel.component';
import { AuthGuard } from './auth.guard';



export const routes: Routes = [
  { path: 'LogPanel', component: LogPanelComponent },
  { path: 'AdminPanel', component: AdminPanelComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/LogPanel', pathMatch: 'full' }
];
