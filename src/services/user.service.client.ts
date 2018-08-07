const USER_API_URL = 'http://localhost:3000';
import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {
  logIn = (user) => {
    return fetch ((USER_API_URL + '/login'),
      {
        method : 'POST',
        body : JSON.stringify(user),
        headers :
          {
            'content-type' : 'application-json'
          }
      });

  }
}
