import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CategoryService } from '../../../services/category.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  @ViewChild('alert') alert: ElementRef;
  formCategory:FormGroup;
  message:string;
  @Input() category:any;
  @Input() modalRef: BsModalRef
  @Output() updateTable = new EventEmitter();


  account_validation_messages = {
    'nameCtrl':[
      {type:'required',message:'Ingrese un nombre el campo es requerido'}
    ]
  }

  constructor(
    private fb:FormBuilder,
    private categoryService:CategoryService
  ) {

   }

  ngOnInit() {
    this.formCategory = this.fb.group({
      nameCtrl:[this.category.name,[Validators.required]]
    })
  }

  showAlert(){
    this.alert.nativeElement.classList.add('show','show-display');
  }

  closeAlert() {
    this.alert.nativeElement.classList.remove('show','show-display');
  }

  save(){
    if(this.formCategory.valid){
      this.category.name = this.formCategory.get('nameCtrl').value;

      this.categoryService.update(this.category).subscribe((response:any)=>{
        this.updateTable.emit();
        this.closeAlert();
        this.alert.nativeElement.classList.replace('alert-danger','alert-success');
        this.message = response.message;
        this.showAlert();
      },err =>{
        if(err.error.message){
          this.message = null;
          this.closeAlert();
          this.alert.nativeElement.classList.replace('alert-success','alert-danger');
          this.message = err.error.message;
          this.showAlert();
        }else{
          this.message = null;
          this.closeAlert();
          this.alert.nativeElement.classList.replace('alert-success','alert-danger');
          this.message = "A ocurrido un error inesperado";
          this.showAlert();
        }
      })
    }else{
      this.message = null;
      this.closeAlert();
      this.alert.nativeElement.classList.replace('alert-success','alert-danger');
      this.message = "Ingrese los datos son requeridos";
      this.showAlert();
    }
  }

}
