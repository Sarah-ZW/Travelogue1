import { Component, OnInit } from "@angular/core";
import { DataService } from "service/data.service";
import { Idata } from "service/dataInterface";


@Component({
  selector: 'app-description',
  templateUrl: 'description.component.html',
  styleUrls: ['description.component.css']
})


export class DescriptionComponent implements OnInit {

  public Idata: Idata[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
   this._dataService.getData()
   .subscribe(data => this.Idata = data);
   console.log(this.Idata);
  }
  
  }