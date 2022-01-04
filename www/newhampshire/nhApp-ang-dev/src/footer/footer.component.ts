import { Component, OnInit} from "@angular/core";
import { LinkService } from "service/link.service";
import { Ldata } from "service/linkInterface";

@Component({
  selector: 'footer-app',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})

export class FooterComponent implements OnInit {

  public Ldata: Ldata[] = [];

  constructor(private _linkService: LinkService) { }

  ngOnInit(): void {
   this._linkService.getData()
   .subscribe(data => this.Ldata = data);
   console.log(this.Ldata);
  }
  
  }