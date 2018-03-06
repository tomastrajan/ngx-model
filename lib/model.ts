import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { shareReplay } from 'rxjs/operators/shareReplay';

export class Model<T> {
  private _data: BehaviorSubject<T>;

  data$: Observable<T>;

  constructor(
    initialData: any,
    immutable: boolean,
    sharedSubscription: boolean,
    clone?: (data: T) => T
  ) {
    this._data = new BehaviorSubject(initialData);
    this.data$ = this._data
      .asObservable()
      .pipe(
        map(
          data =>
            immutable
              ? clone ? clone(data) : JSON.parse(JSON.stringify(data))
              : data
        ),
        sharedSubscription ? shareReplay(1) : map(data => data)
      );
  }

  get(): T {
    return this._data.getValue();
  }

  set(data: T) {
    this._data.next(data);
  }
}

export class ModelFactory<T> {
  create(initialData: T): Model<T> {
    return new Model<T>(initialData, true, false);
  }

  createMutable(initialData: T): Model<T> {
    return new Model<T>(initialData, false, false);
  }

  createMutableWithSharedSubscription(initialData: T): Model<T> {
    return new Model<T>(initialData, false, true);
  }

  createWithCustomClone(initialData: T, clone: (data: T) => T) {
    return new Model<T>(initialData, true, false, clone);
  }
}

export function useModelFactory() {
  return new ModelFactory();
}

export const MODEL_PROVIDER = {
  provide: ModelFactory,
  useFactory: useModelFactory
};
