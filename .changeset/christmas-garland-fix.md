---
'@jcdecor/connect-ui': patch
'@jcdecor/ui': patch
'@jcdecor/vue': patch
---

Fix the Christmas theme's header garland not rendering: combining a `linear-gradient()` (or a CSS color variable) with `url(...)` in the same `background-image` layer list silently drops the image layer in some rendering engines. The garland now uses a dedicated `background-color` plus a single-layer `background-image`, and also ships on `@jcdecor/ui`'s `TopNav` component (previously only the docs shells and `@jcdecor/connect-ui`'s `AppHeader` had it).
