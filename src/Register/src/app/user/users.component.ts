import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  emailPattern = "^[a-z0-0._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private service:UserService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      UserName: '',
      Password:'',
      Email:'',
      FirstName:'',
      LastName:''
    }
  }
  onSubmit(form:NgForm){
    this.insertRecord(form);
  }
  insertRecord(form : NgForm){
    this.service.postUser(form.value).subscribe(res =>{
    this.resetForm(form)
    });

  }
}
