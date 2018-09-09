import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { ProfileCoverComponent } from './partials/profile-cover/profile-cover.component';
import { CoverPhotoComponent } from './partials/profile-cover/cover-photo/cover-photo.component';
import { ProfilePictureComponent } from './partials/profile-cover/profile-picture/profile-picture.component';
import { ProfileNavComponent } from './partials/profile-cover/profile-nav/profile-nav.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/profile/sidebar/sidebar.component';
import { TimelineComponent } from './pages/profile/timeline/timeline.component';
import { GitGraphModule } from 'app/modules/git-graph/git-graph.module';
import { Error404Component } from './pages/error-404/error-404.component';
import { AboutComponent } from './pages/about/about.component';
import { OverviewComponent as AboutOverviewComponent } from './pages/about/overview/overview.component';
import { WorkComponent as AboutWorkComponent } from './pages/about/work/work.component';
import { EducationComponent as AboutEducationComponent } from './pages/about/education/education.component';
import { ProjectsComponent as AboutProjectsComponent } from './pages/about/projects/projects.component';
import { PlacesComponent as AboutPlacesComponent } from './pages/about/places/places.component';
import { ContactComponent as AboutContactComponent } from './pages/about/contact/contact.component';
import { CodeComponent } from './pages/code/code.component';
import { FilesComponent } from './pages/code/files/files.component';
import { OverviewComponent as CodeOverviewComponent } from './pages/code/overview/overview.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ChatBoxComponent } from './partials/chat-box/chat-box.component';
import { ProfileService } from 'app/services/profile.service';
import { SlideshowComponent } from './partials/slideshow/slideshow.component';
import { SlideshowService } from './services/slideshow.service';
import { MessageComponent } from './pages/contact/message/message.component';
import { EmailComponent } from './pages/contact/email/email.component';
import { String2DatePipe } from './pipes/string-2-date.pipe';
import { PostService } from './services/post.service';
import { NpmComponent } from './pages/code/npm/npm.component';
import { GithubComponent } from './pages/code/github/github.component';
import { MailService } from './services/mail.service';

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent
    },
    {
        path: 'about',
        component: AboutComponent,
        children: [
            {
                path: '',
                redirectTo: 'overview',
                pathMatch: 'full'
            },
            {
                path: 'overview',
                component: AboutOverviewComponent
            },
            {
                path: 'work',
                component: AboutWorkComponent
            },
            {
                path: 'education',
                component: AboutEducationComponent
            },
            {
                path: 'projects',
                component: AboutProjectsComponent
            },
            {
                path: 'places',
                component: AboutPlacesComponent
            },
            {
                path: 'contact',
                component: AboutContactComponent
            }
        ]
    },
    {
        path: 'code',
        component: CodeComponent,
        children: [
            {
                path: '',
                component: CodeOverviewComponent
            },
            {
                path: 'npm',
                component: NpmComponent
            },
            {
                path: 'github',
                component: GithubComponent
            }
        ]
    },
    {
        path: 'contact',
        component: ContactComponent,
        children: [
            {
                path: '',
                redirectTo: 'email',
                pathMatch: 'full'
            },
            // {
            //     path: "message",
            //     component: MessageComponent
            // },
            {
                path: 'email',
                component: EmailComponent
            }
        ]
    },
    {
        path: '**',
        component: Error404Component
    }
]

// const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//     suppressScrollX: true
// };

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

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
        AboutOverviewComponent,
        AboutWorkComponent,
        AboutEducationComponent,
        AboutProjectsComponent,
        AboutPlacesComponent,
        AboutContactComponent,
        CodeComponent,
        FilesComponent,
        CodeOverviewComponent,
        ContactComponent,
        ChatBoxComponent,
        SlideshowComponent,
        MessageComponent,
        EmailComponent,
        String2DatePipe,
        NpmComponent,
        GithubComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
        GitGraphModule,
        PerfectScrollbarModule,
        MarkdownToHtmlModule,
    ],
    providers: [
        ProfileService,
        SlideshowService,
        PostService,
        MailService,
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
