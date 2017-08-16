import { TestSignalrClientPage } from './app.po';

describe('test-signalr-client App', () => {
  let page: TestSignalrClientPage;

  beforeEach(() => {
    page = new TestSignalrClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
