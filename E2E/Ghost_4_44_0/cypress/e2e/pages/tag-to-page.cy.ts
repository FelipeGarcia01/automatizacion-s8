import { LabsPage } from "../../PageObject/labs-page";
import { LoginPage } from "../../PageObject/login-page";
import { PagesPage } from "../../PageObject/pages-page";
import { TagPage } from "../../PageObject/tag-page";
import { IStrategy } from "../../support/strategy/i-strategy";
import { StrategyFactory } from "../../support/strategy/strategy-factory";


describe('Escenario Asociar tag a pagina', async ()=>{
    let tagPage = new TagPage();
    let logInPage = new LoginPage();
    let pagesPage = new PagesPage();
    let labsPage = new LabsPage();
    
    let strategy: IStrategy;
    before(async () =>{
      strategy = await StrategyFactory.getStrategy();
    })
    

    it('Given I am logged in datos validos', () =>{
      pagesPage.resolveStrategy(strategy, "");
      logInPage.doLogIn();
      labsPage.clearAdmin();
      //Given
      tagPage.createNewTag();
      cy.wait(2000);
      pagesPage.createNewPage(false);
      cy.url().then((url)=> cy.wrap(url).as('pageUri'));
      cy.wait(2000);  
      
      cy.get('@pageUri').then((pageUri)=>{
          //When 
          pagesPage.addTag(tagPage.tagNameText);
          cy.wait(2000);
          
          //Then
          pagesPage.validExistence(pageUri, true, tagPage.tagNameText);
      });
    });

    it('Given I am logged in datos naugthy', () =>{
      pagesPage.resolveStrategy(strategy, "naugthy");
      logInPage.doLogIn();
      labsPage.clearAdmin();
      //Given
      tagPage.createNewTag();
      cy.wait(2000);
      pagesPage.createNewPage(false);
      cy.url().then((url)=> cy.wrap(url).as('pageUri'));
      cy.wait(2000);  
      
      cy.get('@pageUri').then((pageUri)=>{
          //When 
          pagesPage.addTag(tagPage.tagNameText);
          cy.wait(2000);
          
          //Then
          pagesPage.validExistence(pageUri, true, tagPage.tagNameText);
      });
    });

    it('Given I am logged in datos largeString', () =>{
      pagesPage.resolveStrategy(strategy, "largeString");
      logInPage.doLogIn();
      labsPage.clearAdmin();
      //Given
      tagPage.createNewTag();
      cy.wait(2000);
      pagesPage.createNewPage(false);
      cy.url().then((url)=> cy.wrap(url).as('pageUri'));
      cy.wait(2000);  
      
      cy.get('@pageUri').then((pageUri)=>{
          //When 
          pagesPage.addTag(tagPage.tagNameText);
          cy.wait(2000);
          
          //Then
          pagesPage.validExistence(pageUri, true, tagPage.tagNameText);
      });
    });
  
  });