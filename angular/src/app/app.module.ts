// ANGULAR CORE COMPONENTS
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NotificationModule} from '@progress/kendo-angular-notification';

// KENDO CORE COMPONENTS
import {InputsModule} from '@progress/kendo-angular-inputs';
import {LabelModule} from '@progress/kendo-angular-label';
import {DialogsModule} from '@progress/kendo-angular-dialog';
import {PopupModule} from '@progress/kendo-angular-popup';
import {GridModule} from '@progress/kendo-angular-grid';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {LayoutModule} from '@progress/kendo-angular-layout';
import {PDFExportModule} from '@progress/kendo-angular-pdf-export';

// TOPICOPOLIS COMPONENTS
import {AppComponent} from './app.component';
import {routing} from './app.routing';

// SERVICES
import {AuthService} from './modules/shared/services/auth.service';
import {TopicService} from './modules/shared/services/topic.service';
import {AlertService} from './modules/shared/services/alert.service';
import {UserService} from './modules/shared/services/user.service';
import {AuthGuard} from './modules/shared/services/auth.guard';
import {LoginGuard} from './modules/shared/services/login.guard';
import {AdminGuard} from './modules/shared/services/admin.guard';
import {ZipValidator} from './modules/admin/authenticate/register/zipvalidator';
import {CategoryService} from './modules/shared/services/category.service';
import {ResponsiveService} from "./modules/shared/services/responsive.service";


// MODULE DECORATOR TO IMPORT OTHER MODULES AND DECLARE COMPONENTS
@NgModule
({
  declarations:
  [
    AppComponent,
  ],
  imports:
  [
    routing,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    InputsModule,
    BrowserAnimationsModule,
    LabelModule,
    DialogsModule,
    PopupModule,
    NotificationModule,
    GridModule,
    DropDownsModule,
    PDFExportModule,
    LayoutModule
  ],
  providers:
  [
    AuthService,
    TopicService,
    AlertService,
    UserService,
    AuthGuard,
    LoginGuard,
    AdminGuard,
    ZipValidator,
    CategoryService,
    ResponsiveService
  ],
  bootstrap: [AppComponent]
})

// MODULE CLASSNAME
export class AppModule
{
}
