import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {MessageWrapper} from 'app/hello-world/message-wrapper';


@Injectable()
export class HelloWorldService {

  constructor(private http: Http) {
  }

  getMessage(): Observable<string> {
    return this.http.get('/api/hello')
      .map((response: Response) => {
        const messageWrapper: MessageWrapper = response.json();
        return messageWrapper.message;
      });
  }
}
