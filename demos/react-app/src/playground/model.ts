import { Step, BranchedStep, Definition } from 'custom-react-flow';

export interface WorkflowDefinition extends Definition {
	properties: {
		alfa?: string;
	};
}

export interface TaskStep extends Step {
	componentType: 'task';
	type: 'task';
	properties: {
		x?: string;
		y?: string;
	};
}

export interface SwitchStep extends BranchedStep {
	componentType: 'switch';
	type: 'switch';
	properties: {
		x?: string;
		y?: string;
	};
}
