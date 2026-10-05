// @ts-expect-error script .mjs sem tipos
import { outdated } from '../scripts/sync-shared.mjs';

describe('arquivos compartilhados com @jcdecor/ui', () => {
  it('estão em dia com packages/ui (rode `npm run sync -w @jcdecor/vue`)', () => {
    expect(outdated()).toEqual([]);
  });
});
