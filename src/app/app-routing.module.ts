import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ServiceComponent} from "./service/service.component";
import {CpuComponent} from "./service-detail/cpu/cpu.component";
import {NetworkCardComponent} from "./service-detail/network-card/network-card.component";
import {ProcessComponent} from "./service-detail/process/process.component";
import {ProductComponent} from "./product/product.component";
import {ProgrammeComponent} from "./programme/programme.component";
import {CustomerComponent} from "./customer/customer.component";
import {IntroduceComponent} from "./introduce/introduce.component";
import {TheServerComponent} from "./service-detail/the-server/the-server.component";
import {ErrorComponent} from "./service-detail/error/error.component";
import {SettingComponent} from "./service-detail/setting/setting.component";
import {FlowComponent} from "./service-detail/flow/flow.component";
import {BrowserComponent} from "./service-detail/browser/browser.component";
import {AjaxinfoComponent} from "./service-detail/ajaxinfo/ajaxinfo.component";
import {TheServerInfoComponent} from "./service-detail/the-server-info/the-server-info.component";
import {CenterComponent} from "./service-detail/center/center.component";

const routes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'service',
    component:ServiceComponent,
    // children:[
    //   //服务页面进来默认的组件
    //   // {
    //   //   path:'',
    //   //   component:TheServerComponent
    //   // },
    //   {
    //     path:'cpu',
    //     component:CpuComponent
    //   },
    //   {
    //     path:'networkCard',
    //     component:NetworkCardComponent
    //   },
    //   {
    //     path:'process',
    //     component:ProcessComponent
    //   },
    //   {
    //     path:'theServer',
    //     component:TheServerComponent
    //   },
    //   {
    //     path:'error',
    //     component:ErrorComponent
    //   },
    //   {
    //     path:'setting',
    //     component:SettingComponent
    //   },
    //   {
    //     path:'flow',
    //     component:FlowComponent
    //   },
    //   {
    //     path:'browser',
    //     component:BrowserComponent
    //   },
    //   {
    //     path:'ajax',
    //     component:AjaxinfoComponent
    //   }
    // ]
    children:[
      {
        path:'',
        component:CenterComponent,
      },
      {
        path:'the-server-info/:id',
        component:TheServerInfoComponent
      }

    ]
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'programme',
    component:ProgrammeComponent
  },
  {
    path:'customer',
    component:CustomerComponent
  },
  {
    path:'introduce',
    component:IntroduceComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
