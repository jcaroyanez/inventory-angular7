import { Component, Inject, OnInit, AfterViewInit, Renderer2, OnDestroy,  ViewChild, ElementRef  } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewInit, OnDestroy {
  @ViewChild('alert') alert: ElementRef;
  user:any = {};
  formLogin:FormGroup;
  message:string;

  account_validation_messages = {
    'emailCtrl':[
      {type:'required',message:'Ingrese un correo'},
      {type:'email',message:'Ingrese un email valido'}
    ],
    'passwordCtrl':[
      {type:'required',message:'Ingrese una contraseña'}
    ]
  }
  
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private authSerive:AuthService,
    private userService:UserService,
    private router:Router,
    public fb:FormBuilder
    ) {
      this.formLogin = fb.group({
        emailCtrl:[null,[Validators.required,Validators.email]],
        passwordCtrl:[null,[Validators.required]]
      })

    }

  ngOnInit() {}

  ngAfterViewInit(){
    this.renderer.addClass(this.document.body, 'blue-gradient');
  }

  ngOnDestroy(){
    this.renderer.removeClass(this.document.body, 'blue-gradient');
  }

  closeAlert() {
    this.alert.nativeElement.classList.remove('show','show-display');
  }

  signin(){
    if(this.formLogin.valid){
      this.user.email = this.formLogin.get('emailCtrl').value;
      this.user.password = this.formLogin.get('passwordCtrl').value;
      
      this.authSerive.signin(this.user).subscribe(res => {
        this.userService.setUser(res);
        this.router.navigate(['/panel']);

      },err => {
        if(err.error){
          this.message = err.error.message;
          this.showAlert(); 
        }else{
          this.message = "a ocurrido un error inesperado";
          this.showAlert();
        }
      });
    }else{
      this.message = "Ingrese los datos requeridos";
      this.showAlert();
    } 
  }

  showAlert(){
    this.alert.nativeElement.classList.add('show','show-display');
  }


}
