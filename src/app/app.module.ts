import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FormPage } from '../pages/form/form';
import { SignInPage } from '../pages/sign-in/sign-in';
import {ModalContentPage} from '../pages/form/form';
import{TabPage} from '../pages/tab/tab';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FormPage,
    SignInPage,
    ModalContentPage,
    TabPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{},{
      links: [
        { component: HomePage, name: 'Home', segment: 'home' },
        { component: ListPage, name: 'List', segment: 'List' },
        { component: FormPage, name: 'Form', segment: 'Form' },
        { component: SignInPage, name: 'SignInPage', segment: 'sign-in' },
        {component: TabPage,name:'Tab', segment:'Tab'}
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FormPage,
    SignInPage,
    ModalContentPage,
    TabPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}