import type { MantineThemeComponents } from '@mantine/core';
import { buttonsComponents } from './buttons';
import { comboboxComponents } from './combobox';
import { dataDisplayComponents } from './dataDisplay';
import { feedbackComponents } from './feedback';
import { inputsComponents } from './inputs';
import { layoutComponents } from './layout';
import { miscComponents } from './misc';
import { navigationComponents } from './navigation';
import { overlaysComponents } from './overlays';
import { typographyComponents } from './typography';

/** Overrides de componentes Mantine, um arquivo por categoria (mesmas categorias de mantine.dev). */
export const jcComponents: MantineThemeComponents = {
  ...layoutComponents,
  ...inputsComponents,
  ...comboboxComponents,
  ...buttonsComponents,
  ...navigationComponents,
  ...feedbackComponents,
  ...overlaysComponents,
  ...dataDisplayComponents,
  ...typographyComponents,
  ...miscComponents,
};
