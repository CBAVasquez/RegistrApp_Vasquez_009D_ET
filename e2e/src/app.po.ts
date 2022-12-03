import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/login');
  }


  async getPageTitle(){
    return element(by.css('app-root h2')).getText();
  }

  async getPageLabel(){
    return element(by.css('app-root .ingreso')).getText();
  }

  async getPageNoCuenta(){
    return element(by.css('app-root .noTienes')).getText();
  }

  async getPageCorreo(){
    return element(by.css('app-root .textoCorreo')).getText();
  }
  async getPagePass(){
    return element(by.css('app-root .textoPass')).getText();
  }
}


