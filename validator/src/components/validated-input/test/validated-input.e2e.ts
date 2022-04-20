import { newE2EPage } from '@stencil/core/testing';

describe('validated-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<validated-input></validated-input>');

    const element = await page.find('validated-input');
    expect(element).toHaveClass('hydrated');
  });
});
