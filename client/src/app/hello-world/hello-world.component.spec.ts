import {async, ComponentFixture, inject, TestBed, tick} from '@angular/core/testing';

import {HelloWorldComponent} from './hello-world.component';
import {HelloWorldService} from './hello-world.service';
import {Observable} from 'rxjs/Rx';
import {HttpModule} from '@angular/http';


describe('HelloWorldComponent', () => {
  let component: HelloWorldComponent;
  let fixture: ComponentFixture<HelloWorldComponent>;

  function getInjectedDependency(dependencyClass) {
    return fixture.debugElement.injector.get(dependencyClass);
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [HelloWorldComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldComponent);
    component = fixture.componentInstance;
  });

  it('should display message returned from hello world service', () => {
      // Given
      const message = 'Hello Adrien';
      const observableMessage = Observable.of(message);

      const helloWorldService = getInjectedDependency(HelloWorldService);
      spyOn(helloWorldService, 'getMessage').and.returnValue(observableMessage);

      // When
      fixture.detectChanges();

      // Then
      const nativeElement = fixture.nativeElement;
      expect(nativeElement.querySelector('p').textContent).toContain(message);
    });
});
