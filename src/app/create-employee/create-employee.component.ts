import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  userForm  : FormGroup; 
  listData : any;

  constructor( private fb : FormBuilder,
    private authService: AuthService, private router: Router) {

      this.listData = [];

      this.userForm = this.fb.group({
        name : ['',Validators.required],
        address : ['',Validators.required],
        contactNo : ['',Validators.required],
        gender : ['',Validators.required]
      })
     }

     public addItem() : void{
       this.listData.push(this.userForm.value);
       this.userForm.reset();
     }

     reset(){ 
       this.userForm.reset();
     }

     removeItem(element: any){
       this.listData.forEach((value: any,index: any)=>{
         if(value == element)
         this.listData.splice(index,1)
       })
     }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
