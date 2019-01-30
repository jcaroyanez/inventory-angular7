import { Component, Inject, OnInit, AfterViewInit,Renderer2, OnDestroy  } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewInit, OnDestroy {

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    ) { }

  ngOnInit() {}

  ngAfterViewInit(){
    this.renderer.addClass(this.document.body, 'blue-gradient');
  }

  ngOnDestroy(){
    this.renderer.removeClass(this.document.body, 'blue-gradient');
  }


}
