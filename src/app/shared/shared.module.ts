import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import { TooltipService } from './services/tooltip.service';

@NgModule({
	imports: [BrowserModule, FormsModule, ReactiveFormsModule, MaterialModule],
	declarations: [TooltipDirective],
	exports: [TooltipDirective, TooltipService],
})
export class SharedModule {}
