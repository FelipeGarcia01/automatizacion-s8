import { LabsPage } from "../../PageObject/labs-page";
import { LoginPage } from "../../PageObject/login-page";
import { PagesPage } from "../../PageObject/pages-page";
import { IStrategy } from "../../support/strategy/i-strategy";
import { StrategyFactory } from "../../support/strategy/strategy-factory";



describe('Borrar Pagina', async ()=>{
    let logInPage = new LoginPage();
    let pagesPage = new PagesPage();
    let labsPage = new LabsPage();

    let strategy: IStrategy;
    before(async () =>{
      strategy = await StrategyFactory.getStrategy();
    })

    it('Escenario borrar una pagina con datos validos', () =>{

      pagesPage.resolveStrategy(strategy, "");
      logInPage.doLogIn();
      labsPage.clearAdmin();  
      pagesPage.createNewPage(false);
      cy.url().then((pageUri)=>{
        pagesPage.validExistence(pageUri,true);
        //When
        cy.wait(2000);
        pagesPage.deletePage(pageUri);
        //Then
        cy.wait(2000);
        pagesPage.validExistence(pageUri,false);
      });

    });

    it('Escenario borrar una pagina con datos naugthy', () =>{

      pagesPage.resolveStrategy(strategy, "naugthy");
      logInPage.doLogIn();
      labsPage.clearAdmin();  
      pagesPage.createNewPage(false);
      cy.url().then((pageUri)=>{
        pagesPage.validExistence(pageUri,true);
        //When
        cy.wait(2000);
        pagesPage.deletePage(pageUri);
        //Then
        cy.wait(2000);
        pagesPage.validExistence(pageUri,false);
      });

    });

    it('Escenario borrar una pagina con datos largeString', () =>{

      pagesPage.resolveStrategy(strategy, "largeString");
      logInPage.doLogIn();
      labsPage.clearAdmin();  
      pagesPage.createNewPage(false);
      cy.url().then((pageUri)=>{
        pagesPage.validExistence(pageUri,true);
        //When
        cy.wait(2000);
        pagesPage.deletePage(pageUri);
        //Then
        cy.wait(2000);
        pagesPage.validExistence(pageUri,false);
      });

    });
  
  });