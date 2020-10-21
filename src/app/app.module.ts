import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LearnComponent } from './pages/learn/learn.component';
import { CommunityComponent } from './pages/community/community.component';
import { FooterComponent } from './elements/footer/footer.component';
import { MenuComponent } from './elements/menu/menu.component';
import { SidebarComponent } from './elements/sidebar/sidebar.component';
import { AboutComponent } from './pages/about/about.component';
import { ModalComponent } from './elements/modal/modal.component';

const appRoutes: Routes = [
  { path: 'learn', component: LearnComponent },
  { path: 'community', component: CommunityComponent, data: { title: 'Comunidad' } },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/learn', pathMatch: 'full' },
  { path: '**', redirectTo: '/learn' },
];

@NgModule({
  declarations: [
    AppComponent,
    LearnComponent,
    CommunityComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
    AboutComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: false }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
