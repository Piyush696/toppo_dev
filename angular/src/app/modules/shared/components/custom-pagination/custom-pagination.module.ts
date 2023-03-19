import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomPaginationComponent } from './custom-pagination.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  	FormsModule,
  	NgxPaginationModule
  ],
  declarations: [CustomPaginationComponent],
  exports: [CustomPaginationComponent]
})
export class CustomPaginationModule { }
