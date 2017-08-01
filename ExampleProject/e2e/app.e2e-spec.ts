import { ExampleProjectPage } from './app.po';

describe('example-project App', () => {
  let page: ExampleProjectPage;

  beforeEach(() => {
    page = new ExampleProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
