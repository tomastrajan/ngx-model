# Angular Model by [@tomastrajan](https://twitter.com/tomastrajan) [![Build Status](https://travis-ci.org/tomastrajan/ngx-model.svg?branch=master)](https://travis-ci.org/tomastrajan/ngx-model)

Simple state management with minimalistic API, one way data flow, 
multiple model support and immutable data exposed as RxJS Observable.


## Documentation
                           
* Check out [Demo & Documentation](http://tomastrajan.github.io/angular-model-pattern-example/) 
* Check out [Blog Post](https://medium.com/@tomastrajan/model-pattern-for-angular-state-management-6cb4f0bfed87) 

## Getting started

1. Install `ngx-model`
    ```
    npm i -S ngx-model
    ```
    or
    
    ```
    npm install --save ngx-model
    ``` 
    ```
    or
    
    ```
    yarn add ngx-model
    ``` 

2. Import and use `NgxModelModule` in you `AppModule` (or `CoreModule`)
    ```
    import { NgxModelModule } from 'ngx-model';
        
    @NgModule({
      /* ... */
      imports: [
        NgxModelModule
      ]
    })
    export class CoreModule {}
    
    ``` 

3. Import and use `Model` and `ModelFactory` in your own services.
    ```
    import { Injectable } from '@angular/core';
    import { ModelFactory, Model } from 'ngx-model';
        
    @Injectable()
    export class TodosService {
            
      private model: Model<Todo[]>;
      
      todos$: Observable<Todo[]>;
      todosCount$: Observable<TodosCounts>;
            
      constructor(private modelFactory: ModelFactory<Todo[]>) {
        this.model = this.modelFactory.create([]);
        this.todos$ = this.model.data$;
        this.todosCounts$ = this.todos$.map(todos => ({
          all: todos.length,
          active: todos.filter(t => !t.done).length,
          done: todos.filter(t => t.done).length
        }));
      }
        
      toggleTodo(name: string) {
        // retrieve raw model data
        const todos = this.model.get();
            
        // mutate model data
        todos.forEach(t => {
          if (t.name === name) {
            t.done = !t.done;
          }
        });
            
        // set new model data (after mutation)
        this.model.set(todos);
      }
        
      /* ... */
        
    }
    ```

4. Use service in your component. Import and inject service into components constructor.
Subscribe to services data in template `todosService.todos$ | async` 
or explicitly `this.todosService.todos$.subscribe(todos => { /* ... */ })`

    ```
    import { Component, OnInit, OnDestroy } from '@angular/core';
    import { TodosService, Todo, TodosCounts } from './todos.service';
    import { Subscription } from 'rxjs/Subscription';
    
    @Component({
      selector: 'ampe-todos',
      templateUrl: `
        /* ... */
        <p>Todo list ({{counts.active}})</p>
        <ul>
          <!-- template subscription to todos using async pipe -->
          <li *ngFor="let todo of todosService.todos$ | async" (click)="onTodoClick(todo)">
            {{todo.name}}
          </li>
        </ul>
      `,
    })
    export class TodosComponent implements OnInit, OnDestroy {
    
      subscription: Subscription;
      counts: TodosCounts;
     
      constructor(public todosService: TodosService) {}
    
      ngOnInit() {
        // explicit subscription to todos counts
        this.subscription = this.todosService.todosCounts$
          .subscribe(counts => (this.counts = counts));
      }
    
      onTodoClick(todo: Todo) {
        this.todosService.toggleTodo(todo.name);
      }
      
      /* ... */
    
    }

    ```

## Documentation

This is a library version of original [Angular Model Pattern](https://tomastrajan.github.io/angular-model-pattern-example).
All the original examples and documentation is still valid. The only difference is that
you can install `ngx-model` from npm instead of having to copy model pattern
implementation to your project by hand.

Als, check out the [Blog Post](https://medium.com/@tomastrajan/model-pattern-for-angular-state-management-6cb4f0bfed87) and 
[Advanced Usage Patterns](https://tomastrajan.github.io/angular-model-pattern-example#/advanced) 
to find more how-tos and examples.

