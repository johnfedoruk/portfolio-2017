import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitGraphComponent } from './git-graph.component';
import { HttpModule } from '@angular/http';
import { HtmlPipe } from './pipes/html.pipe';
import { CommitService } from "./services/commit.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [GitGraphComponent, HtmlPipe],
  providers: [CommitService],
  exports:[GitGraphComponent]
})
export class GitGraphModule { }
