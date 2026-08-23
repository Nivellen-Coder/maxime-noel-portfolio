# ADR-0001 - Angular Signals

## Status

Accepted

## Context

Angular propose plusieurs approches :

- @Input()
- RxJS
- Signals

Nova souhaite utiliser une API cohérente et moderne.

## Decision

Tous les nouveaux composants utiliseront exclusivement :

- input()
- output()
- model()
- signal()
- computed()

## Consequences

### Avantages

- API moderne

- moins de boilerplate

- compatible SSR

- meilleure lisibilité

### Inconvénients

- Angular 17+ requis

### Alternatives

@Input()

Refusée.
