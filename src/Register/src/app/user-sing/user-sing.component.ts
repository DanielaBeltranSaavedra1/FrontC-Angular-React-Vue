import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-sing',
  templateUrl: './user-sing.component.html',
  styleUrls: ['./user-sing.component.css']
})
export class UserSingComponent implements OnInit {
 
  constructor(private service:UserService) { }

  ngOnInit(): void {
   
  }
  
  onSubmit(){
    this.service.login().subscribe(res =>{
      this.service.formData = {
        UserName: '',
        Password:'',
        Email:'',
        FirstName:'',
        LastName:''
      }

    });
  }

}
