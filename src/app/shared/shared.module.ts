import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IMaskModule } from 'angular-imask';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import { TooltipService } from './services/tooltip.service';
import { InputTextComponent } from './components/inputs/input-text.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { InputTextWithMaskComponent } from './components/inputs/input-text-with-mask.component';
import { SvgDirective } from './directives/svg/svg.directive';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		IMaskModule,
	],
	declarations: [
		InputTextComponent,
		InputTextWithMaskComponent,
		SvgDirective,
		TooltipComponent,
		TooltipDirective,
	],
	exports: [
		InputTextComponent,
		InputTextWithMaskComponent,
		SvgDirective,
		TooltipComponent,
		TooltipDirective,
		TooltipService,
	],
})
export class SharedModule {}
