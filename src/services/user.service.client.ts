const USER_API_URL = 'http://localhost:3000';
import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {
  logIn = (user) => {
    return fetch ((USER_API_URL + '/login'),
      {
        method : 'POST',
        body : JSON.stringify(user),
        credentials : 'include',
        headers :
          {
            'content-type' : 'application/json'
          }
      }).then(function (response) {

        return response.json();

    });

  }
  currentUser = () =>
    fetch('http://localhost:3000/currentUser',
      {
        credentials: 'include'
      }).then (response => response.json())

  logOut = () => {
    return fetch((USER_API_URL + '/logout'),
      {
        method: 'POST',
        credentials: 'include'
      }).then (function (response) {
      return response.json();
    });
  }

}


