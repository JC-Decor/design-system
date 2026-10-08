import * as Vue from 'vue';
import { compile } from '@vue/compiler-dom';
import { mantineNumericProps } from '../src/compiler';
import { Avatar, Group, SimpleGrid, Text, TextInput } from '../src';
import { render } from './render';

/** Compila um template como o @vitejs/plugin-vue faria, com e sem o transform. */
function compileWith(template: string, withTransform = true) {
  const { code } = compile(template, { mode: 'function', nodeTransforms: withTransform ? [mantineNumericProps] : [] });
  return new Function('Vue', code)(Vue);
}

function mount(template: string, withTransform = true) {
  const Comp = Vue.defineComponent({
    components: { Avatar, Group, SimpleGrid, Text, TextInput },
    render: compileWith(template, withTransform),
  });
  return render(() => Vue.h(Comp));
}

describe('mantineNumericProps (compilador)', () => {
  it('número em texto vira número: o Mantine Vue converte para rem como o React', () => {
    const { container } = mount('<Avatar size="64" alt="Ana" /><Group gap="4" w="70" data-testid="g">x</Group>');
    const avatar = container.querySelector('.mantine-Avatar-root') as HTMLElement;
    expect(avatar.style.getPropertyValue('--avatar-size')).toBe('4rem');
    const group = container.querySelector('.mantine-Group-root') as HTMLElement;
    expect(group.style.getPropertyValue('--group-gap')).toBe('0.25rem');
    expect(group.style.width).toBe('4.375rem');
  });

  it('sem o transform o Mantine Vue grava CSS sem unidade (o bug que ele corrige)', () => {
    const { container } = mount('<Avatar size="64" alt="Ana" />', false);
    const avatar = container.querySelector('.mantine-Avatar-root') as HTMLElement;
    expect(avatar.style.getPropertyValue('--avatar-size')).toBe('64');
  });

  it('aceita kebab-case e valores com unidade ou nomes do tema ficam como estão', () => {
    const code = compile(
      '<simple-grid vertical-spacing="12" spacing="md" /><Text maw="300px" size="sm" lh="1.2" />',
      { mode: 'function', nodeTransforms: [mantineNumericProps] },
    ).code;
    expect(code).toContain('verticalSpacing: 12');
    expect(code).toContain('spacing: "md"');
    expect(code).toContain('maw: "300px"');
    expect(code).toContain('size: "sm"');
    expect(code).toContain('lh: "1.2"');
  });

  it('não mexe em props que não são tamanho, em componentes do app nem no Vuetify', () => {
    const code = compile(
      '<TextInput label="10" placeholder="5" /><VIcon size="20" /><MeuCard p="4" /><div width="10" />',
      { mode: 'function', nodeTransforms: [mantineNumericProps] },
    ).code;
    expect(code).toContain('label: "10"');
    expect(code).toContain('placeholder: "5"');
    expect(code).toMatch(/_component_VIcon, \{ size: "20" \}/);
    expect(code).toMatch(/_component_MeuCard, \{ p: "4" \}/);
    expect(code).toContain('width: "10"');
  });
});
