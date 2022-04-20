import { newSpecPage } from '@stencil/core/testing';
import { ValidatedInput } from '../validated-input.component';

describe('validated-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ValidatedInput],
      html: `<validated-input></validated-input>`,
    });
    expect(page.root).toEqualHtml(`
      <validated-input>
        <mock:shadow-root>
          <input />
        </mock:shadow-root>
      </validated-input>
    `);
  });
});
