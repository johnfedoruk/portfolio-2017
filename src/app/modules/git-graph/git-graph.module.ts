import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GitGraphComponent } from './git-graph.component';
import { HtmlPipe } from './pipes/html.pipe';
import { CommitService } from './services/commit.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [GitGraphComponent, HtmlPipe],
  providers: [CommitService],
  exports: [GitGraphComponent]
})
export class GitGraphModule { }
