# @mitsuharu/react-native-components-plus

It reassembles standard react native components.

## Usage

### Button

A simple button component.

```tsx
import { Button } from 'react-native-components-plus';

<Button title="Button" onPress={() => {}} />
```

### List Components

A component to display lists.

```tsx
import { Section, Cell, CellGroup, Button } from 'react-native-components-plus';

<Section title="Header">
  <CellGroup>
    <Cell title="Title" onPress={() => {}} />
    <Cell title="With Accessory" AccessoryView={() => <Button title="Action" onPress={() => {}} />} />
  </CellGroup>
</Section>
```

### LoadingSpinner

A component to show a loading indicator.

```tsx
import { LoadingSpinner } from 'react-native-components-plus';

<LoadingSpinner isLoading={true} />
```

### Spacer

A component to add space between other components.

```tsx
import { Spacer } from 'react-native-components-plus';

<Spacer height={16} />
<Spacer width={16} />
```

## Installation

```sh
npm install @mitsuharu/react-native-components-plus
```

or

```sh
yarn add @mitsuharu/react-native-components-plus
```

## Develop

Get started with the project:

```shell
yarn
```

Run the example app on iOS:

```shell
yarn example ios
```

Run the example app on Android:

```shell
yarn example android
```

Run the example app on Web:

```shell
yarn example web
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
