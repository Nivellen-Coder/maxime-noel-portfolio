# Nova

Nova est la bibliothèque de composants Angular standalone du portfolio. Son API publique est disponible via `@nova/ui`.

## Composants disponibles

- Actions : `Button`
- Feedback : `Spinner`
- Formulaires : `Field`, `Label`, `Input`, `Textarea`, `HelperText`, `ErrorText`
- Typographie : `Heading`, `Text`
- Utilitaires : `PrefixDirective`, `SuffixDirective`, `Icon` (`search`, `check`, `download`)

## Exemple rapide

```ts
import { Button, Field, Input, Label } from '@nova/ui';
```

```html
<nds-field required>
  <nds-label>Votre adresse e-mail</nds-label>
  <nds-input type="email" placeholder="vous@exemple.com" />
</nds-field>

<nds-button type="submit" [loading]="isSaving()">Envoyer</nds-button>
```

Un `Field` relie automatiquement son label, son aide et son erreur au contrôle natif. `Input` et `Textarea` prennent en charge le two-way binding avec `[(value)]`.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.0.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the library, run:

```bash
ng build nova
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

### Publishing the Library

Once the project is built, you can publish your library by following these steps:

1. Navigate to the `dist` directory:

   ```bash
   cd dist/nova
   ```

2. Run the `npm publish` command to publish your library to the npm registry:
   ```bash
   npm publish
   ```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
