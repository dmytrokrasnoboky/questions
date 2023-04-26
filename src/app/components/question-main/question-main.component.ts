import { Component } from '@angular/core';
import { selectAllQuestions } from '../../store/questions.selectors';
import { routerManagement } from '../../services/router-management.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state.interfaces';
import * as questionsActions from '../../store/questions.actions';

@Component({
  selector: 'app-question-main',
  templateUrl: './question-main.component.html',
  styleUrls: ['./question-main.component.css']
})
export class QuestionMainComponent {
  questionCards$ = this.store.select(selectAllQuestions);

  constructor(private router: routerManagement, private store: Store<IAppState>) {}

  createQuestion(): void {
    this.router.moveTo('/create');
  }

  answerQuestions(): void {
    this.router.moveTo('/lists');
  }

  editCard(index: number): void {
    this.router.moveTo(`/edit/${index}`);
  }

  deleteCard(index: number): void {
    this.store.dispatch(questionsActions.deleteQuestion({ index: index }));
  }

  ngOnInit(): void {
    this.store.dispatch(questionsActions.getQuestionCards());
  }
}
