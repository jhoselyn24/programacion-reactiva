import { Component } from '@angular/core';
import { TrafficLightService } from 'src/app/service/traffic-light.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent {
  constructor(public trafficLightService: TrafficLightService) {}
}
