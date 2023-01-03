import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import { PageContentComponent } from '../pages/page-content/page-content.component';
import { ItemComponent } from '../pages/item/item.component';
import { AsyncComponent } from '../pages/async/async.component';




@NgModule({
  declarations: [
    PageContentComponent,
    ItemComponent,
    AsyncComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
  ],
  exports: [
    MatFormFieldModule,
    PageContentComponent,
    ItemComponent,
    AsyncComponent,
  ]
})
export class PagesModuleModule { }
