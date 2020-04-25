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
	template: `<div
		class="tooltip"
		tooltip
		[tooltipOptions]="options"
		style="width: 20px; height: 20px;"
	>
		<icon [type]="'help'" [title]="title" [width]="20" [height]="20"></icon>
		<div style="display: none;" #tooltipBody data-template="template">
			<ng-content></ng-content>
		</div>
	</div>`,
	styleUrls: ['./tooltip.component.scss'],
})
class TooltipComponent implements OnInit, AfterViewInit {
	@ViewChild('tooltipBody', { static: true })
	tooltipBody: ElementRef<HTMLDivElement>;

	options: Partial<namePlugin.Props>;

	@Input() name: string;
	@Input() title: string;
	@Input() maxWidth: number | string = 350;
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
