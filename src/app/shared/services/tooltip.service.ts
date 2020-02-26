import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Instance, Props } from 'tippy.js';

type TooltipDictionary = {
	[name: string]: Instance<Props>[];
};

@Injectable({
	providedIn: 'root',
})
class TooltipService {
	private tooltipInstances: TooltipDictionary = {};

	tooltipStates = new BehaviorSubject<TooltipDictionary>({});

	setTooltip(name: string, instance: Instance<Props>): void {
		if (!this.tooltipInstances[name]) {
			this.tooltipInstances[name] = [instance];
		} else {
			this.tooltipInstances[name].push(instance);
		}

		this.tooltipStates.next(this.tooltipInstances);
	}

	removeTooltip(name: string, id?: number): void {
		const tooltips = this.getTooltip(name);
		if (!tooltips) {
			return;
		}

		tooltips.forEach((instance, index, array) => {
			if (id && instance.id === id) {
				instance.destroy();

				tooltips.splice(array.indexOf(instance), 1);
			} else if (!id) {
				instance.destroy();

				tooltips.splice(array.indexOf(instance), 1);
			}
		});

		if (this.tooltipInstances[name].length === 0) {
			delete this.tooltipInstances[name];
		}
	}

	getTooltip(name: string): Instance<Props>[] {
		return this.tooltipInstances[name] ? this.tooltipInstances[name] : null;
	}

	showTooltip(name: string): void {
		const tooltips = this.getTooltip(name);
		if (!tooltips) {
			return;
		}

		tooltips.forEach(instance => instance.show());
	}

	hideTooltip(name: string): void {
		const tooltips = this.getTooltip(name);
		if (!tooltips) {
			return;
		}

		tooltips.forEach(instance => instance.hide());
	}
}

export { TooltipService };
