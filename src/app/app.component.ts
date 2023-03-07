import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BehaviorSubject, interval, ReplaySubject, Subject, take, scan, Observable, map} from 'rxjs';
import { AddValue, RemoveValue } from './store/test.actions';
import { StateModel } from './store/test.model';
import { TestState } from './store/test.state';

const inititalValue: string = 'BehaviorSubject init';
const bufferSize: number = 3;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
  constructor(private store: Store){}

  @Select(TestState) storeData$: Observable<StateModel>;

  subject$: Subject<string> = new Subject();
  replySubject$: ReplaySubject<string> = new ReplaySubject(bufferSize);
  behaviorSubject$: BehaviorSubject<string> = new BehaviorSubject(inititalValue);

  stream$ = interval(1000).pipe(
    take(3),
    scan((acc, value) =>  acc + value, 0)
  );

  storeValues$: Observable<string[]>;

  ngOnInit(): void {
    this.storeValues$ = this.storeData$.pipe(map(item => item.values));
  }

  onSubjectClick(): void {
    this.subject$.next('subject event');
  }

  onReplySubject(): void {
    this.replySubject$.next('replySubject event');
  }

  onBehaviorSubject(): void {
    this.behaviorSubject$.next('behaviorSubject event');
  }

  addStoreValue(value: string) {
    this.store.dispatch(new AddValue(value));
  }

  removeStoreValue(value: string) {
    this.store.dispatch(new RemoveValue(value));
  }
}

