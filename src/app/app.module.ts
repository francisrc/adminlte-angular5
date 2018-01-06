import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarConfigComponent } from './sidebar-config/sidebar-config.component';
import { SimplePageComponent } from './simple-page/simple-page.component';
import { PageComponent } from './page/page.component';
import { RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    SidebarConfigComponent,
    SimplePageComponent,
    PageComponent,
    CadastroComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
