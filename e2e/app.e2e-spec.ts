import { ExampleprojectPage } from './app.po';

describe('exampleproject App', () => {
  let page: ExampleprojectPage;

  beforeEach(() => {
    page = new ExampleprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
