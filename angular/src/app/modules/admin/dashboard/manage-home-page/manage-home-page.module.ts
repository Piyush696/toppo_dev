import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageHomePageRoutingModule } from './manage-home-page-routing.module';
import { ManageHomePageComponent } from './manage-home-page.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ForbiddenWordDirective } from "../../../shared/directive/forbidden.directive";

@NgModule({
  imports: [
    CommonModule,
    ManageHomePageRoutingModule,
    ReactiveFormsModule,
  	FormsModule,
  	InputsModule,
    DialogsModule,
    GridModule,
    DropDownsModule,
    ImageCropperModule
  ],
  declarations: [ManageHomePageComponent, ForbiddenWordDirective],
  exports: [ManageHomePageComponent]
})
export class ManageHomePageModule { }
