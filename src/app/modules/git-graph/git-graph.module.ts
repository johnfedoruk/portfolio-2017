import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitGraphComponent } from './git-graph.component';
import { HttpModule } from '@angular/http';
import { HtmlPipe } from './pipes/html.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [GitGraphComponent, HtmlPipe],
  exports:[GitGraphComponent]
})
export class GitGraphModule { }
