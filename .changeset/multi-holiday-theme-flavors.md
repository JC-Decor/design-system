---
'@jcdecor/connect-ui': minor
'@jcdecor/ui': minor
'@jcdecor/vue': minor
---

Generalize the seasonal theme flavor into a date-driven multi-holiday system: Carnaval, Páscoa, Festa Junina, Independência do Brasil and Natal each get their own decoration artwork and color override, computed from the current date (`theme/holidays.ts`) instead of picked manually. At most one holiday is "in season" at a time.

Breaking changes to the opt-in theming API:
- `JcProvider`/`ConnectProvider`: the `defaultThemeFlavor` prop is replaced by `forceThemeFlavor`, which now bypasses the date-based detection entirely (useful for previews/tests) instead of just seeding the initial value.
- `useThemeFlavor()` now returns `{ flavor, activeHoliday, festiveEnabled, setFestiveEnabled }` instead of `{ flavor, setFlavor }`.
- `<ThemeFlavorToggle />` is now a plain on/off switch for the current season's flavor (it renders nothing outside of a holiday window) rather than a picker between `'default'` and `'christmas'`.

Also fixes `@jcdecor/connect-ui`'s garland decoration, which was still inlining its SVG as a base64 data URI in `styles.css` (never got the `renderBuiltUrl`/externalized-asset fix shipped for `@jcdecor/ui`/`@jcdecor/vue` in 0.2.3) — it's now emitted as a separate file like the other packages, which matters more now that there are five decoration SVGs instead of one.
