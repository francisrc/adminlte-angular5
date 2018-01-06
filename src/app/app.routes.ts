import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SimplePageComponent } from './simple-page/simple-page.component';
import { PageComponent } from './page/page.component';
import { Routes } from '@angular/router';


export const ROUTES: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'page', component: PageComponent},
    {path: 'cadastro', component: CadastroComponent},
]
