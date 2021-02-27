import { Injectable } from '@angular/core';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[] = [
    {
      id : 101,
      firstName : "sonali",
      lastName : "kashyap",
      address : "80 D",
      city : "vizag",
      state : "andhra",
      order : 1000
    },
    {
      id : 102,
      firstName : "suman",
      lastName : "kashyap",
      address : "80 D",
      city : "vizag",
      state : "andhra",
      order : 2000
    }
  ];
  constructor() { }

  onGet()
  {
    return this.users;
  }

  onAdd(user : User)
  {
    this.users.push(user);
  }
  onDelete(id : number)
  {
    let user = this.users.find(x => x.id === id);
    let index = this.users.indexOf(user, 0);
    this.users.splice(index,1);
  }
}
