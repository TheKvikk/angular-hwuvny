import tippy, {
	LifecycleHooks,
	Plugin,
	Props as TippyProps,
	Tippy,
	Instance,
} from 'tippy.js';

interface NameProps {
	name?: string;
}

type FilteredProps = NameProps &
	Omit<TippyProps, keyof NameProps | keyof LifecycleHooks>;

export type Props = FilteredProps & LifecycleHooks<FilteredProps>;

export const nameProp: Plugin<Props> = {
	name: 'name',
	defaultValue: null,
	fn: () => ({}),
};

export default (tippy as unknown) as Tippy<Props>;
