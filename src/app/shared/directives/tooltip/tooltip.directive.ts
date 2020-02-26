import { Directive, ElementRef, OnInit, Input, OnDestroy } from '@angular/core';
import { TooltipService } from '../../services/tooltip.service';
import tippy, { Props, Instance } from 'tippy.js';
import * as namePlugin from './plugins/name.plugin';

@Directive({
	selector: '[tooltip]',
})
class TooltipDirective implements OnInit, OnDestroy {
	private instance: Instance<Props>;

	@Input('tooltipOptions')
	options: namePlugin.Props;

	constructor(private el: ElementRef, private tooltipService: TooltipService) {}

	ngOnInit(): void {
		const { name } = this.options;
		if (name === '' || name === undefined) {
			throw new Error('Cannot create tooltip without name.');
		}

		this.options.plugins = [namePlugin.nameProp];

		this.instance = tippy(this.el.nativeElement as Element, this.options);
		this.tooltipService.setTooltip(name, this.instance);
	}

	ngOnDestroy(): void {
		this.tooltipService.removeTooltip(this.options.name, this.instance.id);
	}
}

export { TooltipDirective };
