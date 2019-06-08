<<<<<<< HEAD
export class TodoPage {
=======
import { browser, by, element } from 'protractor';

export class AppPage {
>>>>>>> 86737a996bc38f6dedf8b1ccf754d2dbcbdc7630
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
