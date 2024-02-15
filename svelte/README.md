![Sequential Workflow Designer for Svelte](https://raw.githubusercontent.com/nocode-js/custom-react-flow/main/.github/cover.png)

# Sequential Workflow Designer for Svelte

[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fb4rtaz%2Fcustom-react-flow%2Fbadge%3Fref%3Dmain&style=flat-square)](https://actions-badge.atrox.dev/b4rtaz/custom-react-flow/goto?ref=main) [![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](/LICENSE) [![View this project on NPM](https://img.shields.io/npm/v/custom-react-flow-svelte.svg?style=flat-square)](https://npmjs.org/package/custom-react-flow-svelte)

Svelte wrapper for the [Sequential Workflow Designer](https://github.com/nocode-js/custom-react-flow) component.

## 🚀 Installation

Install the following packages by [NPM](https://www.npmjs.com/) command:

`npm i custom-react-flow custom-react-flow-svelte`

Add CSS files to your global CSS file:

```css
@import 'custom-react-flow/css/designer.css';
@import 'custom-react-flow/css/designer-light.css';
@import 'custom-react-flow/css/designer-dark.css';
```

## 🎬 Usage

Import the component:

```tsx
import { SequentialWorkflowDesigner } from 'custom-react-flow-svelte';
```

Load or create a new definition:

```ts
import type { Definition } from 'custom-react-flow';

let definition: Definition = { ... };
```

If you want to read the validation status create a new variable:

```ts
let isValid: boolean | null = null;
```

To receive definition changes create a new function:

```ts
function onDefinitionChanged({ detail }: { detail: { definition: Definition, isValid: boolean } }) {
  definition = detail.definition;
  isValid = detail.isValid;
}
```

Define your configuration:

```ts
import type { StepsConfiguration, ToolboxConfiguration, ValidatorConfiguration } from 'custom-react-flow';

const steps: StepsConfiguration = { /* ... */ };
const toolbox: ToolboxConfiguration = { /* ... */ };
const validator: ValidatorConfiguration = { /* ... */ };
```

Now you can use the component:

```svelte
<SequentialWorkflowDesigner
  theme="light"
  definition={definition}
  on:definitionChanged={onDefinitionChanged}
  steps={steps}
  toolbox={toolbox}
  validator={validator} />
```

Next you may need to create editors for your definition. You need to create a new component for the root editor and the step editor. Each editor has predefined props.

The root editor:

```svelte
<script lang="ts">
  import type { RootEditorContext, Definition } from 'custom-react-flow';

  export let context: RootEditorContext;
  export let definition: Definition;
  export let isReadonly: boolean;
  let velocity = definition.properties.velocity;

  function onVelocityChanged(event: Event) {
    velocity = parseInt((event.target as HTMLInputElement).value);
    definition.properties.velocity = velocity;
    context.notifyPropertiesChanged();
  }
</script>

<input type="number" value={String(velocity)} on:input={onVelocityChanged} />
```

The step editor:

```svelte
<script lang="ts">
  import type { StepEditorContext, Definition, Step } from 'custom-react-flow';

  export let context: StepEditorContext;
  export let definition: Definition;
  export let step: Step;
  export let isReadonly: boolean;

  let name = step.name;

  function onNameChanged(event: Event) {
    name = (event.target as HTMLInputElement).value;
    step.name = name;
    context.notifyNameChanged();
  }
</script>

<input value={name} on:input={onNameChanged} />
```

Import your components and set them to the designer:

```svelte
<script lang="ts">
  import StepEditor from './step-editor.svelte';
  import RootEditor from './root-editor.svelte';
</script>

<SequentialWorkflowDesigner
  ...
  stepEditor={StepEditor}
  rootEditor={RootEditor} />
```

That's it! Now you can use the designer in your Svelte application.

Check the [demo project](https://github.com/nocode-js/custom-react-flow/tree/main/demos/svelte-app).

## 💡 License

This project is released under the MIT license.
