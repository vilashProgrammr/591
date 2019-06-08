<<<<<<< HEAD
import { TodoPage } from './app.po';

describe('todo App', function() {
  let page: TodoPage;

  beforeEach(() => {
    page = new TodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
=======
import { AppPage } from './app.po';

describe('ecommerce App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
>>>>>>> 86737a996bc38f6dedf8b1ccf754d2dbcbdc7630
  });
});
