import { OnPage } from './app.po';

describe('on App', function() {
  let page: OnPage;

  beforeEach(() => {
    page = new OnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
