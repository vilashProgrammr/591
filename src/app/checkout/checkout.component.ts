import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;

declare var $;


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  fname:string="";
  lname:string="";
  email:string="";
  addr:string="";
  pin:string="";
  ph:string="";


  constructor(private router: Router) { 
    
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  }

  submit(){
    var phoneno = /^\+?d{10}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(this.fname.trim()=="" || this.lname.trim()=="" || this.email.trim()=="" || this.addr.trim()=="" || this.pin=="" || this.ph==""){
      $('#errormsg').text('*Please fill the data');
    }else if(!this.email.match(mailformat)){
      $('#errormsg').text('*Please enter a valid EmailId');
    }else if(this.pin.toString().length!=6){
      $('#errormsg').text('*Please enter a valid PIN Number');
    }else if(this.ph.toString().length!=10){
      $('#errormsg').text('*Please enter a valid Phone Number');
    }
    else{
      $('#errormsg').text('');
      // swal({
      //   title: "Order Placed Successfully",
      //   text: "Thanks for your purchase",
      //   icon: "success"
      // });

      swal({
        title: "Order Placed Successfully",
        text: "Thanks for your purchase",
        icon: "success",
        buttons: [
          'Go Home',
          'Continue Shopping'
        ],
        dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            this.router.navigate(['/productlist']);
          } else {
            alert('hi');
            this.router.navigate(['/home']);
          }
        }); 
    }
  }

}
