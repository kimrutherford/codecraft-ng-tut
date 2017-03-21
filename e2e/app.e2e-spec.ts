import { TutPage } from './app.po';

describe('tut App', () => {
  let page: TutPage;

  beforeEach(() => {
    page = new TutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
