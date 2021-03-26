import { newE2EPage } from '@stencil/core/testing';

describe('modal-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<modal-component></modal-component>');
    const element = await page.find('modal-component');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
