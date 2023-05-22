import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent  implements OnInit{
  createEmployee: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder){
    this.createEmployee = this.fb.group({
      EMP_NO: ['', Validators.required],
      NAME: ['', Validators.required],
      EMAIL_ID: ['', Validators.required],
    })
  }
  ngOnInit(): void {
    
  }
  addEmployee(){
    this.submitted=true;

    if(this.createEmployee.invalid){
      return;
    }
    const employee: any = {
      EMP_ID: this.createEmployee.value.EMP_ID,
      NAME: this.createEmployee.value.NAME,
      EMAIL_ID: this.createEmployee.value.EMAIL_ID,
    
    }


    console.log(employee);
  }
}
