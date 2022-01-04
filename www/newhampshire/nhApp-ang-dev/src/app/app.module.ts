import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/header/header.component';
import { DescriptionComponent } from 'src/description/description.component';
import { GalleryComponent } from 'src/gallery/gallery.component';
import { FooterComponent } from 'src/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DescriptionComponent,
    GalleryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
