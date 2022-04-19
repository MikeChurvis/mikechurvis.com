# Portfolio Web Client <br>[![Client Tests (vitest)](https://github.com/MikeChurvis/mikechurvis.com/workflows/Client%20Tests%20(vitest)/badge.svg)](https://github.com/MikeChurvis/mikechurvis.com/actions/workflows/vitest.yml) [![End-to-End Tests (cypress)](https://github.com/MikeChurvis/mikechurvis.com/workflows/End-to-End%20Tests%20(cypress)/badge.svg)](https://github.com/MikeChurvis/mikechurvis.com/actions/workflows/cypress.yml)

This is the codebase for the frontend of my portfolio website.

## Types of Tests

### `src/**/<module>.test.ts`
Unit tests for a single module. Run by Vitest.

### `src/components/<component>/<component>.spec.ts`
Component-level integration tests. Each of these forms a complete behavior specification for its respective component. Run by Vitest.

### `cypress/integration/<feature|behavior>.e2e.test.ts`
End-to-end integration tests. Run by Cypress.