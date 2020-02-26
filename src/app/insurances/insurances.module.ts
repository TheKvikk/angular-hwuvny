import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepDirective } from './core/directives/step.directive';
import { NavigationDirective } from './core/directives/navigation.directive';
import { StepsService } from './core/services/steps.service';
import { PropertyModule } from './property/property.module';
import { TravelModule } from './travel/travel.module';
import { StepsRendererComponent } from './core/components/renderer/steps-renderer.component';

@NgModule({
	imports: [CommonModule, PropertyModule, TravelModule],
	declarations: [
		StepDirective,
		NavigationDirective,
		StepsRendererComponent,
		NavigationDirective,
	],
	providers: [StepsService],
	exports: [StepsRendererComponent],
})
export class InsurancesModule {}
