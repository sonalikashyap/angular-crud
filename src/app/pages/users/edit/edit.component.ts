import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id : number;
  header : string;
  user : User = {
    id : this.userService.users.length+1,
    firstName : "",
    lastName : "",
    address : "",
    city : "",
    state : "",
    order : null
  }
  constructor(private router : Router, private route : ActivatedRoute, private userService : UserService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Add User' : 'Update User';

    if (this.id !== 0)
    {
      this.user = this.userService.onGetUser(this.id);
      // this.userService.onUpdate(this.user);
    }
    
  }

  onSubmit(form : NgForm)
  {
    console.log(form.value);
    let user : User = {
      id : form.value.id,
      firstName : form.value.firstName,
      lastName : form.value.lastName,
      address : form.value.address,
      city : form.value.city,
      state : form.value.state,
      order : form.value.order
    }
    if (this.id === 0)
    {
      this.userService.onAdd(this.user);
      this.userService.onDelete(0);
    }
    else
    {
      this.userService.onUpdate(this.user);
      this.userService.onDelete(this.id);
    }

    this.userService.onAdd(user);
    //this.userService.onDelete(0);

    this.router.navigateByUrl('/');
  }

}
