import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionCreateComponent } from './components/question-create/question-create.component';
import { QuestionEditComponent } from './components/question-edit/question-edit.component';
import { QuestionListsComponent } from './components/question-lists/question-lists.component';
import { QuestionManagementComponent } from './components/question-management/question-management.component';
import { QuestionMainComponent } from './components/question-main/question-main.component';

export const routes: Routes = [
  {
    path: '',
    component: QuestionManagementComponent,
    children: [
      {
        path: 'main',
        component: QuestionMainComponent,
      },
      {
        path: 'create',
        component: QuestionCreateComponent,
      },
      {
        path: 'edit/:index',
        component: QuestionEditComponent,
      },
      {
        path: 'lists',
        component: QuestionListsComponent,
      },
      {
        path: '**',
        redirectTo: 'main'
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
