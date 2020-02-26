import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import { TooltipService } from './services/tooltip.service';
import { InputTextComponent } from './components/inputs/input-text.component';

@NgModule({
	imports: [BrowserModule, FormsModule, ReactiveFormsModule, MaterialModule],
	declarations: [TooltipDirective, InputTextComponent],
	exports: [TooltipDirective, TooltipService, InputTextComponent],
})
export class SharedModule {}
