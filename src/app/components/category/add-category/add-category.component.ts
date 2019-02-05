import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

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
    private fb:FormBuilder,
    private categoryService:CategoryService,
    private ngZone:NgZone
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
        this.message = null;
        this.name = {name:this.formCategory.get('nameCtrl').value};
        this.categoryService.save(this.name).subscribe((res:any) =>{
            this.formCategory.reset();
            this.closeAlert();
            this.alert.nativeElement.classList.replace('alert-danger','alert-success');
            this.message = res.message;
            this.showAlert();

        },err => {
          this.message = null;
          this.closeAlert();
          this.alert.nativeElement.classList.replace('alert-success','alert-danger');
          this.message = err.error.message;
          this.showAlert();

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
