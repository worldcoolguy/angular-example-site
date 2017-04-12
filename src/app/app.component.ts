import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl:'app.component.html'
})


export class AppComponent implements OnInit {
  name = 'Angular';
  layoutClass={cssClass:''};
  ngOnInit(): void {
  }
}
