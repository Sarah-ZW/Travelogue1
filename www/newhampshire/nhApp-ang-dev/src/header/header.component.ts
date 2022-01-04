import {Component, OnInit} from "@angular/core";
import { DataService } from "service/data.service";
import { Idata } from "service/dataInterface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public Idata: Idata[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
   this._dataService.getData()
   .subscribe(data => this.Idata = data);
   console.log(this.Idata);
  }
  
  }
