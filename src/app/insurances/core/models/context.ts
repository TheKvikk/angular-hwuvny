class Context<TModel> {
	private _viewModel: TModel;

	set viewModel(newViewModel: TModel) {
		this._viewModel = newViewModel;
	}

	get viewModel(): TModel {
		return this._viewModel;
	}
}

export { Context };
