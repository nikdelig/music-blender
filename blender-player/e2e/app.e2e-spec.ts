import { AppPage } from './app.po';

describe('blender-player App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Awesome Music blender');
  });
});
