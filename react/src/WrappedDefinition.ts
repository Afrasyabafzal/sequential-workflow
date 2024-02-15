import { Definition } from 'custom-react-flow';

export interface WrappedDefinition<TDefinition extends Definition = Definition> {
	readonly value: TDefinition;
	readonly isValid: boolean | undefined;
}

export function wrapDefinition<TDefinition extends Definition = Definition>(
	value: TDefinition,
	isValid?: boolean
): WrappedDefinition<TDefinition> {
	return {
		value,
		isValid
	};
}
