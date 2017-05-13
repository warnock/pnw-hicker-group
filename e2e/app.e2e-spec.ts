import { HikersGroupPage } from './app.po';

describe('hikers-group App', () => {
  let page: HikersGroupPage;

  beforeEach(() => {
    page = new HikersGroupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
