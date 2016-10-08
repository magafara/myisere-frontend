import { Component } from '@angular/core';
import { Activity }    from './activity';
@Component({
  moduleId: module.id,
  selector: 'activity-form',
  templateUrl: 'activity-form.component.html'
})
export class IsairActivityFormComponent {
  model = new Activity(1, 'Title1', 'Price1');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
