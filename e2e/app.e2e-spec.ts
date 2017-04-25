import { YunyanPage } from './app.po';

describe('yunyan App', () => {
  let page: YunyanPage;

  beforeEach(() => {
    page = new YunyanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
