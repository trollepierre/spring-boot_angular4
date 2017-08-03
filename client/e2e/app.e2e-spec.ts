import { PierrePage } from './app.po';

describe('pierre App', () => {
  let page: PierrePage;

  beforeEach(() => {
    page = new PierrePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
