import { Component } from '@angular/core';
<<<<<<< HEAD
import { TodoAppComponent } from './todo-app';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TodoAppComponent]
})
export class AppComponent {
=======
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
>>>>>>> 86737a996bc38f6dedf8b1ccf754d2dbcbdc7630
}
