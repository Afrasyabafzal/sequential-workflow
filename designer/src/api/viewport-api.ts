import { Vector } from '../core';
import { ViewportController } from '../designer-extension';
import { WorkspaceControllerWrapper } from '../workspace/workspace-controller';

export class ViewportApi {
	public constructor(
		private readonly workspaceController: WorkspaceControllerWrapper,
		private readonly viewportController: ViewportController
	) {}

	public resetViewport() {
		this.viewportController.setDefault();
	}

	public zoom(direction: boolean) {
		this.viewportController.zoom(direction);
	}

	public moveViewportToStep(stepId: string) {
		const component = this.workspaceController.getComponentByStepId(stepId);
		const canvasPosition = this.workspaceController.getCanvasPosition();

		const clientPosition = component.view.getClientPosition();
		const componentPosition = clientPosition.subtract(canvasPosition);

		const componentSize = new Vector(component.view.width, component.view.height);
		this.viewportController.focusOnComponent(componentPosition, componentSize);
	}
}
