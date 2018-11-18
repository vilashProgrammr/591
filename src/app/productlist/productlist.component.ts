import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  parval:string="1";
  constructor(private router:Router) { }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  }

  navigate_to_view(){
    this.router.navigate(['/productviewpara',this.parval]);
  }
}
