import { Component, OnInit, Input} from '@angular/core';
import { Satellite } from '../satellite';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';


@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }

  countType (typeSatellite: string): number {
    let total = 0
    for (let i=0; i < this.satellites.length; i++){
      if (this.satellites[i].type === typeSatellite) {
        total += 1;
      } 
    }
    return total;
  }

}