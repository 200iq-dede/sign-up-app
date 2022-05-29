import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { DragDropFileUploadDirective } from './directive/drag-drop-file-upload.directive';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    DragDropFileUploadDirective,
    DragDropComponent,
    ThankYouComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
