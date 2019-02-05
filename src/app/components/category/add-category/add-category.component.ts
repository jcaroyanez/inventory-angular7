import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  @ViewChild('alert') alert: ElementRef;
  formCategory:FormGroup;
  name:any;
  message:string;

  account_validation_messages = {
    'nameCtrl':[
      {type:'required',message:'Ingrese un nombre el campo es requerido'}
    ]
  }
  constructor(
    private fb:FormBuilder
  ) { 
    this.formCategory = fb.group({
      nameCtrl:[null,[Validators.required]]
    })
  }

  ngOnInit() {
  }

  showAlert(){
    this.alert.nativeElement.classList.add('show','show-display');
  }

  closeAlert() {
    this.alert.nativeElement.classList.remove('show','show-display');
  }
  save(){
    if(this.formCategory.valid){
       this.name = {name:this.formCategory.get('nameCtrl').value};
       
    }else{
      this.message = "Ingrese los datos son requeridos";
      this.showAlert();
    }
  }



}
