import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  selected = 'Roles';
  Roles: any = ['Admin', 'Author', 'Reader'];
  options:any=['Mumbai','Vashi','Panvel','Vile Parle','Bandra','Mahim','Wadala','Govandi','Chembur'];
  options2:any=['Mumbai','Vashi','Panvel','Vile Parle','Bandra','Mahim','Wadala','Govandi','Chembur'];
  constructor(private builder:FormBuilder) { }
  frmName:FormGroup;
  ngOnInit(): void {
    this.frmName=this.builder.group({
      name: ['',Validators.required],
      myControl:new FormControl()      
    });
    
  }

  onSubmit()
  {
    console.log(this.frmName.get("name").value);
  }
  changeInput(value:string){
    console.log(value);
    console.log("================");
    console.log(this.options2.filter(x=>x.startsWith(value)));
    this.options=this.options2.filter(x=>x.startsWith(value));
     
  }

}
