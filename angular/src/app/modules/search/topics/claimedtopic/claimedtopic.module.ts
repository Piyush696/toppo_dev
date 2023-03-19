import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClaimedtopicRoutingModule} from './claimedtopic.routing.module';
import {ClaimedtopicComponent} from './claimedtopic.component';
import {TabStripModule} from '@progress/kendo-angular-layout';
import {NgxPaginationModule} from 'ngx-pagination';
import {IntroComponent} from './intro/intro.component';
import {VideoComponent} from './video/video.component';
import {WhitePaperComponent} from './white-paper/white-paper.component';
import {LoginComponent} from './login/login.component';
import {ApplicationComponent} from './application/application.component';
import {LoginTabComponent} from './login-tab/login-tab.component';
import {RegisterComponent} from './register/register.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { ForgotComponent } from './forgot/forgot.component';

// MODULE IMPORTS,DECLARATIONS AND EXPORTS
@NgModule 
({
  imports: 
  [
    CommonModule,
    TabStripModule,
    ReactiveFormsModule,
    FormsModule,
    ClaimedtopicRoutingModule,
    NgxPaginationModule,
    PdfViewerModule
  ],
  declarations: 
  [
    ClaimedtopicComponent,
    IntroComponent,
    VideoComponent,
    WhitePaperComponent,
    LoginComponent,
    ApplicationComponent,
    LoginTabComponent,
    RegisterComponent,
    ForgotComponent
  ],
  exports: [ClaimedtopicComponent]
})

// MODULE CLASS NAME
export class ClaimedtopicModule
{
}
