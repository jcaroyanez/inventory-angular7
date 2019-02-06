import { Component, OnInit,  ViewChild, HostListener, AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { MdbTablePaginationComponent, MdbTableService } from 'angular-bootstrap-md';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit, AfterViewInit  {
  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('alert') alert: ElementRef;
   searchText:string;
   message = ''; 

   @HostListener('input') oninput() {
    this.searchItems();
   }

   elements = [];
   previous = [];
   headElements = ['Nombre','Fecha de creación','Acciones '];
   firstItemIndex;
   lastItemIndex;

  constructor(
    private categorySerice:CategoryService,
    private tableService: MdbTableService,
    private cdRef: ChangeDetectorRef
  ) { 
 
  }

  showAlert(){
    this.alert.nativeElement.classList.add('show','show-display');
  }

  closeAlert() {
    this.alert.nativeElement.classList.remove('show','show-display');
  }

  ngOnInit() {
    this.getAllCategory();
  }  

  getAllCategory(){
    this.closeAlert();
    this.categorySerice.getAll().subscribe((response:any[]) => {
      this.elements = response;
      this.tableService.setDataSource(this.elements);
      this.elements = this.tableService.getDataSource();
      this.previous = this.tableService.getDataSource();
    },err => {
      if(err.error.message){
        console.log(err)
        this.message = err.error.message;
        this.showAlert(); 
      }else{
        this.message = "A ocurrido un error inesperado";
         this.showAlert();
      } 
    })  
  }

  ngAfterViewInit(){
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(8);
    this.firstItemIndex = this.mdbTablePagination.firstItemIndex;
    this.lastItemIndex = this.mdbTablePagination.lastItemIndex;

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  onNextPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

  onPreviousPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

  searchItems() {
    this.closeAlert();
    const prev = this.tableService.getDataSource();

    if (!this.searchText) {
      this.tableService.setDataSource(this.previous);
      this.elements = this.tableService.getDataSource();
    }

    if (this.searchText) {
      this.elements = this.tableService.getDataSource().filter((v) => {
        if ((v.name.toLowerCase().indexOf(this.searchText.toLowerCase())) > -1) {
          return true;
        } return false;
      })
      console.log(this.elements)
      this.tableService.setDataSource(prev);
    }

  }
}
