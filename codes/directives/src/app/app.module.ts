import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivasComponent } from './ngswitch/diretivas.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { DiretivaNgstyleComponent } from './ngstyle/ngstyle.component';
import { OperatorElvisComponent } from './operator-elvis/operator-elvis.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { FundoAmareloDirective } from './diretivas/fundo-amarelo.directive';
import { FocusOnDirective } from './diretivas/focus-on.directive';
import { HighlightMouseDirective } from './diretivas/highlight-mouse.directive';
import { HighlightDirective } from './diretivas/highlight.directive';
import { NgElseDirective } from './diretivas/ng-else.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretivasComponent,
    NgforComponent,
    NgclassComponent,
    DiretivaNgstyleComponent,
    OperatorElvisComponent,
    NgcontentComponent,
    FundoAmareloDirective,
    FocusOnDirective,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
