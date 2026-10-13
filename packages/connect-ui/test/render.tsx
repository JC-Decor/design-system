import { render as rtlRender } from '@testing-library/react';
import { ConnectProvider } from '../src';

export function render(ui: React.ReactNode) {
  return rtlRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => <ConnectProvider env="test">{children}</ConnectProvider>,
  });
}
export * from '@testing-library/react';
