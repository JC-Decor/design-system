import { render as rtlRender } from '@testing-library/react';
import { JcProvider } from '../src';

export function render(ui: React.ReactNode) {
  return rtlRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => <JcProvider env="test">{children}</JcProvider>,
  });
}
export * from '@testing-library/react';
