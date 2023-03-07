import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { SecondChildComponent } from './components/second-child/second-child.component';
import { CustomPipe } from './pipe/custom.pipe';
import { TestState } from './store/test.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CustomPipe,
    ErrorPageComponent,
    SecondChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([TestState]),
    // NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }