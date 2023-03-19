import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageDirectoryLinksRoutingModule } from './manage-directory-links-routing.module';
import { ManageDirectoryLinksComponent } from './manage-directory-links.component';

@NgModule({
  imports: [
    CommonModule,
    ManageDirectoryLinksRoutingModule
  ],
  declarations: [ManageDirectoryLinksComponent],
  exports: [ManageDirectoryLinksComponent]
})
export class ManageDirectoryLinksModule { }
