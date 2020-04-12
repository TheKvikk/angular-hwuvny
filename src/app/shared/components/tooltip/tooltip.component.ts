import {
	Component,
	Input,
	ViewChild,
	OnInit,
	ElementRef,
	AfterViewInit,
} from '@angular/core';
import * as namePlugin from '../../directives/tooltip/plugins/name.plugin';
import { TooltipService } from '../../services/tooltip.service';

@Component({
	selector: 'tooltip',
	template: `<div class="tooltip" tooltip [tooltipOptions]="options">
		<icon
			[type]="'help'"
			[title]="title"
			[width]="'20px'"
			[height]="'20px'"
		></icon>
		<div style="display: none;" #tooltipBody data-template="template">
			<ng-content></ng-content>
		</div>
	</div>`,
	styles: [
		'.tooltip { display: inline-block; color: #17d6fe; }',
		'::ng-deep svg { stroke: currentColor; stroke-width: 2; }',
	],
})
class TooltipComponent implements OnInit, AfterViewInit {
	@ViewChild('tooltipBody', { static: true })
	tooltipBody: ElementRef<HTMLDivElement>;

	options: Partial<namePlugin.Props>;

	@Input() name: string;
	@Input() title: string;
	@Input() interactive = false;
	@Input() maxWidth: number | string;
	@Input() placement: 'top' | 'right' | 'bottom' | 'left' = null;

	constructor(private tooltipService: TooltipService) {}

	ngOnInit(): void {
		this.options = {
			name: this.name,
			allowHTML: true,
			maxWidth: this.maxWidth,
			interactive: true,
			placement: this.placement,
		};
	}

	ngAfterViewInit(): void {
		this.tooltipService.getTooltip(this.name).forEach((tooltip) => {
			tooltip.setContent(this.tooltipBody.nativeElement.innerHTML);
		});
	}
}

export { TooltipComponent };
