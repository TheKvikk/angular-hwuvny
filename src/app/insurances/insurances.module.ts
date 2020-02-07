import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepDirective } from './common/directives/step.directive';
import { NavigationDirective } from './common/directives/navigation.directive';
import { StepsService } from './common/services/steps.service';
import { PropertyModule } from './property/property.module';
import { TravelModule } from './travel/travel.module';
import { StepsRendererComponent } from './common/components/renderer/steps-renderer.component';

@NgModule({
  imports: [
    CommonModule,
    PropertyModule,
    TravelModule
  ],
  declarations: [
    StepDirective,
    NavigationDirective,
    StepsRendererComponent,
    NavigationDirective
  ],
  providers: [
    StepsService
  ],
  exports: [
    StepsRendererComponent
  ]
})
export class InsurancesModule { }
