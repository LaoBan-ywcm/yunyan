import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ProgrammeComponent } from './programme/programme.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { CustomerComponent } from './customer/customer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouelComponent } from './carouel/carouel.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { ServeNavbarComponent } from './service-detail/serve-navbar/serve-navbar.component';
import { CpuComponent } from './service-detail/cpu/cpu.component';
import { NetworkCardComponent } from './service-detail/network-card/network-card.component';
import { ProcessComponent } from './service-detail/process/process.component';
import { ServeSearchComponent } from './service-detail/serve-search/serve-search.component';
import { TheServerComponent } from './service-detail/the-server/the-server.component';
import { FlowComponent } from './service-detail/flow/flow.component';
import { BrowserComponent } from './service-detail/browser/browser.component';
import { ErrorComponent } from './service-detail/error/error.component';
import { SettingComponent } from './service-detail/setting/setting.component';
import { AjaxinfoComponent } from './service-detail/ajaxinfo/ajaxinfo.component';
import { CenterComponent } from './service-detail/center/center.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    ProgrammeComponent,
    IntroduceComponent,
    CustomerComponent,
    NavbarComponent,
    CarouelComponent,
    FooterComponent,
    ServiceComponent,
    ServeNavbarComponent,
    CpuComponent,
    NetworkCardComponent,
    ProcessComponent,
    ServeSearchComponent,
    TheServerComponent,
    FlowComponent,
    BrowserComponent,
    ErrorComponent,
    SettingComponent,
    AjaxinfoComponent,
    CenterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
