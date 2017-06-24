import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitGraphComponent } from './git-graph.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GitGraphComponent],
  exports:[GitGraphComponent]
})
export class GitGraphModule { }
