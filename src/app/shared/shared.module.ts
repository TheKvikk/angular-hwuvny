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
import { IconComponent } from './components/icons/icon.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		IMaskModule,
	],
	declarations: [
		IconComponent,
		InputTextComponent,
		InputTextWithMaskComponent,
		TooltipComponent,
		TooltipDirective,
	],
	exports: [
		IconComponent,
		InputTextComponent,
		InputTextWithMaskComponent,
		TooltipComponent,
		TooltipDirective,
		TooltipService,
	],
})
export class SharedModule {}
