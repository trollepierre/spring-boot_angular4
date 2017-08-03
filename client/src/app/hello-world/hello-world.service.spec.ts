import {inject, TestBed} from '@angular/core/testing';
import {Http, HttpModule, Response, ResponseOptions} from '@angular/http';

import {HelloWorldService} from './hello-world.service';
import {Observable} from 'rxjs/Rx';

describe('HelloWorldService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [HelloWorldService]
    });
  });

  it('should return message from api',
    inject([HelloWorldService, Http], (service: HelloWorldService, http: Http) => {
      // Given
      const message = 'Hello Adrien !';
      const response = new Response(new ResponseOptions({
        body: `{"message":"${message}"}`
      }));
      spyOn(http, 'get').and.returnValue(Observable.of(response));

      // When
      const observableString = service.getMessage();

      // Then
      observableString.subscribe((result) => {
        expect(result).toEqual(message);
      });
    }));

  it('should get /hello',
    inject([HelloWorldService, Http], (service: HelloWorldService, http: Http) => {
    // given
    spyOn(http, 'get').and.returnValue(Observable.of(new Response(new ResponseOptions())));

    // when
    service.getMessage();

    // then
    expect(http.get).toHaveBeenCalledWith('/api/hello');

  }));

});
