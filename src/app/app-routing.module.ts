import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownPreviewComponent } from './components/markdown-preview/markdown-preview.component';

const routes: Routes = [
  {
    path: 'my-markdown',
    component: MarkdownPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
