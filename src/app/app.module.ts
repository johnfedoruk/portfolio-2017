import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { ProfileCoverComponent } from './partials/profile-cover/profile-cover.component';
import { CoverPhotoComponent } from './partials/profile-cover/cover-photo/cover-photo.component';
import { ProfilePictureComponent } from './partials/profile-cover/profile-picture/profile-picture.component';
import { ProfileNavComponent } from './partials/profile-cover/profile-nav/profile-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileCoverComponent,
    CoverPhotoComponent,
    ProfilePictureComponent,
    ProfileNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
