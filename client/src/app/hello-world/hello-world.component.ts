import {Component, OnInit} from '@angular/core';
import {HelloWorldService} from './hello-world.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.sass'],
  providers: [HelloWorldService]
})
export class HelloWorldComponent implements OnInit {

  message: Observable<string>;

  constructor(private helloWorldService: HelloWorldService) {
  }

  ngOnInit() {
    this.message = this.helloWorldService.getMessage();
  }

}
