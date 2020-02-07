import { Component } from '@angular/core';
import { StepsService } from './insurances/common/services/steps.service';
import { StepsContainer } from './insurances/common/models/steps-container';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  insuranceType: 1 | 2 = 2;
  steps: StepsContainer;

  constructor(private stepsService: StepsService) { }

  ngOnInit() {
    this.pickSteps(this.insuranceType);
  }

  pickSteps = (step: number) => {
    if (step === 1) {
      this.steps = this.stepsService.getPropertySteps();
    }

    if (step === 2) {
      this.steps = this.stepsService.getTravelSteps();
    }
  }
}
