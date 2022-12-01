import { LoginPage } from '../../PageObject/login-page';
import { PagesPage } from '../../PageObject/pages-page';
import { LabsPage } from '../../PageObject/labs-page';
import { IStrategy } from '../../support/strategy/i-strategy';
import { StrategyFactory } from '../../support/strategy/strategy-factory';


describe('Crear Pagina', ()=>{
  let logInPage = new LoginPage();
  let pagesPage = new PagesPage();
  let labsPage = new LabsPage();
  let strategy: IStrategy;
  

  before(async () =>{
    strategy = await StrategyFactory.getStrategy();
  })


  it('Escenario crear una pagina con datos validos', () =>{
    logInPage.doLogIn();
    labsPage.clearAdmin();
    pagesPage.resolveStrategy(strategy, "");
    pagesPage.createNewPage(false);
    //Then
    cy.url().then((url)=> pagesPage.validExistence(url,true));      
  });

  it('Escenario crear una pagina con datos naugthy', () =>{
    logInPage.doLogIn();
    labsPage.clearAdmin();
    pagesPage.resolveStrategy(strategy, "naugthy");
    pagesPage.createNewPage(false);
    //Then
    cy.url().then((url)=> pagesPage.validExistence(url,true));      
  });

  it('Escenario crear una pagina con datos largeString', () =>{
    logInPage.doLogIn();
    labsPage.clearAdmin();
    pagesPage.resolveStrategy(strategy, "largeString");
    pagesPage.createNewPage(false);
    //Then
    cy.url().then((url)=> pagesPage.validExistence(url,true));      
  });

});