import { Context } from '../models/context';

abstract class InsuranceBaseService<TModel> {
	private _context: Context<TModel>;

	get context(): Context<TModel> {
		if (!this._context) {
			this.createContext();
		}

		return this._context;
	}

	get viewModel(): TModel {
		return this.context.viewModel;
	}

	abstract requestViewModel(): void;

	private createContext(): void {
		this._context = new Context<TModel>();
	}
}

export { InsuranceBaseService };
