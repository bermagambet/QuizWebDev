import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(
    private provider: ProviderService
  ) { }

  ngOnInit() {
  }

}
