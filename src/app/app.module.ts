import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { MenusComponent } from './components/menus/menus.component';
import { ServicesComponent } from './components/services/services.component';
import { AvisComponent } from './components/avis/avis.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    NavBarComponent,
    AboutComponent,
    MenusComponent,
    ServicesComponent,
    AvisComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
