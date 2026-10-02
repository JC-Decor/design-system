import {
  AlphaSlider,
  AngleSlider,
  Checkbox,
  CheckboxCard,
  CheckboxIndicator,
  Chip,
  ColorPicker,
  Fieldset,
  HueSlider,
  Input,
  InputWrapper,
  NativeSelect,
  PinInput,
  Radio,
  RadioCard,
  RadioIndicator,
  RangeSlider,
  Rating,
  SegmentedControl,
  Slider,
  Switch,
  type MantineSize,
  type MantineThemeComponents,
} from '@mantine/core';
import { control, isSize } from '../controls';
import classes from './inputs.module.css';

/** Mantine 9 usa `size="sm"` como padrão nos campos; o DS usa md (40px, alinhado ao Button md). */
const INPUT_COMPONENTS = [
  'InputBase', 'TextInput', 'PasswordInput', 'NumberInput', 'Textarea', 'JsonInput',
  'ColorInput', 'FileInput', 'MaskInput',
];
const inputDefaults = Object.fromEntries(INPUT_COMPONENTS.map((name) => [name, { defaultProps: { size: 'md' } }]));

/** Thumbs/trilhos dos sliders de cor (ColorPicker, AlphaSlider e HueSlider usam seletores estáticos próprios). */
const colorSliderClassNames = { slider: classes.colorSlider, sliderOverlay: classes.colorSliderOverlay, thumb: classes.colorThumb };

/** Slider e RangeSlider compartilham o mesmo visual. */
const sliderClassNames = { root: classes.sliderRoot, thumb: classes.sliderThumb, label: classes.sliderLabel, markLabel: classes.sliderMarkLabel };

export const inputsComponents: MantineThemeComponents = {
  ...inputDefaults,
  Input: Input.extend({
    defaultProps: { size: 'md' },
    classNames: { input: classes.input },
    vars: (_theme, props) => {
      const size = (props.size ?? 'md') as MantineSize;
      if (!isSize(size)) return { wrapper: {} };
      return { wrapper: { '--input-height': control[size].height, '--input-fz': control[size].inputFz } };
    },
  }),
  InputWrapper: InputWrapper.extend({
    classNames: { label: classes.label, description: classes.description },
  }),
  /** Seta e opções do menu nativo legíveis no tema escuro. */
  NativeSelect: NativeSelect.extend({
    defaultProps: { size: 'md' },
    classNames: { input: classes.nativeSelect, section: classes.nativeSelectSection },
  }),

  // Seleção ---------------------------------------------------------------
  /** Borda da caixa desmarcada com --ds-border (3:1, WCAG 1.4.11); o gray-4 do Mantine fica em ~2,5:1. */
  Checkbox: Checkbox.extend({ defaultProps: { radius: 'xs' }, classNames: { input: classes.checkInput } }),
  CheckboxIndicator: CheckboxIndicator.extend({ defaultProps: { radius: 'xs' }, classNames: { indicator: classes.checkInput } }),
  CheckboxCard: CheckboxCard.extend({ defaultProps: { radius: 'md' }, classNames: { card: classes.selectCard } }),
  Radio: Radio.extend({ classNames: { radio: classes.checkInput } }),
  RadioIndicator: RadioIndicator.extend({ classNames: { indicator: classes.checkInput } }),
  RadioCard: RadioCard.extend({ defaultProps: { radius: 'md' }, classNames: { card: classes.selectCard } }),
  Switch: Switch.extend({ defaultProps: { radius: 'xl' }, classNames: { track: classes.switchTrack } }),
  /**
   * Chip de filtro da marca: `outline` por padrão; marcado = fundo suave da cor (tag light)
   * + borda e texto da cor, em vez do contorno sem fundo do Mantine.
   */
  Chip: Chip.extend({
    defaultProps: { variant: 'outline' },
    classNames: { label: classes.chipLabel },
    vars: (theme, props) => {
      if (props.variant !== 'outline') return { root: {} };
      const light = theme.variantColorResolver({ color: props.color || theme.primaryColor, theme, variant: 'light' });
      return { root: { '--chip-bg': light.hover, '--chip-hover': light.hover } };
    },
  }),
  SegmentedControl: SegmentedControl.extend({
    defaultProps: { radius: 'sm' },
    classNames: { root: classes.segmentedRoot, indicator: classes.segmentedIndicator, label: classes.segmentedLabel },
  }),

  // Agrupamento e códigos ------------------------------------------------
  /** Fieldset como card: raio 12px, borda soft, fundo surface e legenda 14/600. */
  Fieldset: Fieldset.extend({
    defaultProps: { radius: 'md' },
    classNames: { root: classes.fieldset, legend: classes.fieldsetLegend },
  }),
  /** Caixas quadradas com a altura dos campos (md = 40px), texto 600. */
  PinInput: PinInput.extend({
    defaultProps: { size: 'md' },
    classNames: { input: classes.pinInput },
    vars: (_theme, props) => {
      const size = (props.size ?? 'md') as MantineSize;
      return { root: isSize(size) ? { '--pin-input-size': control[size].height } : {} };
    },
  }),

  // Sliders --------------------------------------------------------------
  Slider: Slider.extend({ classNames: sliderClassNames }),
  RangeSlider: RangeSlider.extend({ classNames: sliderClassNames }),
  AngleSlider: AngleSlider.extend({ classNames: { root: classes.angleRoot, thumb: classes.angleThumb, label: classes.angleLabel } }),

  /** Estrelas âmbar (electric.4 no claro, electric.3 no escuro) em vez do yellow do Mantine. */
  Rating: Rating.extend({
    defaultProps: { color: 'electric.4' },
    classNames: { root: classes.rating, starSymbol: classes.ratingStar },
    vars: (_theme, props) => ({ root: props.color === 'electric.4' ? { '--rating-color': 'var(--jc-rating-color)' } : {} }),
  }),

  // Cor ------------------------------------------------------------------
  ColorPicker: ColorPicker.extend({
    classNames: { ...colorSliderClassNames, saturation: classes.colorSaturation, swatch: classes.colorSwatch },
  }),
  AlphaSlider: AlphaSlider.extend({ classNames: colorSliderClassNames }),
  HueSlider: HueSlider.extend({ classNames: colorSliderClassNames }),
};
