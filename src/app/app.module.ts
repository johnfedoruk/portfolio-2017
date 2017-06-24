import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { ProfileCoverComponent } from './partials/profile-cover/profile-cover.component';
import { CoverPhotoComponent } from './partials/profile-cover/cover-photo/cover-photo.component';
import { ProfilePictureComponent } from './partials/profile-cover/profile-picture/profile-picture.component';
import { ProfileNavComponent } from './partials/profile-cover/profile-nav/profile-nav.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/profile/sidebar/sidebar.component';
import { TimelineComponent } from './pages/profile/timeline/timeline.component';
import { GitGraphModule } from "app/modules/git-graph/git-graph.module";
import { Error404Component } from './pages/error-404/error-404.component';
import { AboutComponent } from './pages/about/about.component';
import { OverviewComponent } from './pages/about/overview/overview.component';
import { WorkComponent } from './pages/about/work/work.component';
import { EducationComponent } from './pages/about/education/education.component';
import { ProjectsComponent } from './pages/about/projects/projects.component';

const routes:Routes = [
	{
		path:"",
		component:ProfileComponent
	},
	{
		path:"about",
		component:AboutComponent,
		children: [
			{
				path:"",
				redirectTo:"overview",
				pathMatch:"full"
			},
			{
				path:"overview",
				component:OverviewComponent
			},
			{
				path:"work",
				component:WorkComponent
			},
			{
				path:"education",
				component:EducationComponent
			},
			{
				path:"projects",
				component:ProjectsComponent
			}
		]
	},
	{
		path:"**",
		component:Error404Component
	}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileCoverComponent,
    CoverPhotoComponent,
    ProfilePictureComponent,
    ProfileNavComponent,
    ProfileComponent,
    SidebarComponent,
    TimelineComponent,
	Error404Component,
	AboutComponent,
	OverviewComponent,
	WorkComponent,
	EducationComponent,
	ProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(routes),
	GitGraphModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
