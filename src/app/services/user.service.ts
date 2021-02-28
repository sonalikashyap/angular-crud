import { Injectable } from '@angular/core';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[] = [
    {
      id : 1,
      firstName : "sonali",
      lastName : "kashyap",
      address : "80 D",
      city : "vizag",
      state : "andhra",
      order : 1000
    },
    {
      id : 2,
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
    //this.onDelete(0);
    this.users.push(user);
  }
  onDelete(id : number)
  {
    let user = this.users.find(x => x.id === id);
    let index = this.users.indexOf(user, 0);
    this.users.splice(index,1);
  }

  onGetUser(id : number)
  {
    return (this.users.find(x => x.id === id));
  }

  onUpdate(user : User)
  {
    let oldUser = this.users.find(x => x.id === user.id);
    oldUser.firstName = user.firstName;
    oldUser.lastName = user.lastName;
    oldUser.address = user.address;
    oldUser.city = user.city;
    oldUser.state = user.state;
    oldUser.order = user.order;
  }
}
