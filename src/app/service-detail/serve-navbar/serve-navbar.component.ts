import {Component, OnInit, Input} from '@angular/core';
import {Server} from "../../shared/server.service";
declare let $: any;
@Component({
  selector: 'app-serve-navbar',
  templateUrl: './serve-navbar.component.html',
  styleUrls: ['./serve-navbar.component.css']
})
export class ServeNavbarComponent implements OnInit {

  //获取当前的服务器
  @Input()
  server: Server;

  //当前服务器的虚拟机数
  serverVmNs: number[];



  constructor() {
  }

  ngOnInit() {

    this.serverVmNs =new Array(this.server.vmN) ;

    $(document).ready(function(){
      $.sidebarMenu = function (menu) {
        let animationSpeed = 300;

        $(menu).on('click', 'li a', function (e) {
          let $this = $(this);
          let checkElement = $this.next();

          if (checkElement.is('.treeview-menu') && checkElement.is(':visible')) {
            checkElement.slideUp(animationSpeed, function () {
              checkElement.removeClass('menu-open');
            });
            checkElement.parent("li").removeClass("active");
          }

          //If the menu is not visible
          else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
            //Get the parent menu
            let parent = $this.parents('ul').first();
            //Close all open menus within the parent
            let ul = parent.find('ul:visible').slideUp(animationSpeed);
            //Remove the menu-open class from the parent
            ul.removeClass('menu-open');
            //Get the parent li
            let parent_li = $this.parent("li");

            //Open the target menu and add the menu-open class
            checkElement.slideDown(animationSpeed, function () {
              //Add the class active to the parent li
              checkElement.addClass('menu-open');
              parent.find('li.active').removeClass('active');
              parent_li.addClass('active');
            });
          }
          //if this isn't a link, prevent the page from being redirected
          if (checkElement.is('.treeview-menu')) {
            e.preventDefault();
          }
        });
      }

      $.sidebarMenu($('.sidebar-menu'));

      //  点击子列表，改变样式
      $('.treeview-menu>li>a').on('click', function () {
        // console.log($(this).text());
        console.log($('.treeview-menu:eq(0)>li>a').text());
        $('.treeview-menu>li>a>i').removeClass('fa-dot-circle-o').addClass('fa-circle-o');
        $(this).find('i').removeClass('fa-circle-o').addClass('fa-dot-circle-o');
      });
    })




  }

}
