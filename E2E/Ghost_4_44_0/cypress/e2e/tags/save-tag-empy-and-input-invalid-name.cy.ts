import { LoginPage } from "../../PageObject/login-page";
import TagPage from "../../PageObject/TagPage";
import { IStrategy } from "../../support/strategy/i-strategy";
import { StrategyFactory } from "../../support/strategy/strategy-factory";
require('@cypress/xpath');

describe("Cypress Create a tag and save, fill valid data and finally save Test Suite", function () {
    let strategy: IStrategy;
    let logInPage= new LoginPage();

    before(async () => {  
        strategy = await StrategyFactory.getStrategy();
      })

    it("Create a tag and save, fill valid data and finally save with valid data", function () {

        //Given
        let nameTag = strategy.getTagName();
        
        //When
        logInPage.doLogIn();         
        const tag = new TagPage();
        cy.wait(1000);        
        tag.navigate();
        tag.waitForTag();  
        cy.wait(1000); 
        tag.createTag();
        tag.save();
        cy.wait(1000); 
        tag.enterNameTag(nameTag);
        //Then
        tag.save();
        tag.waitForSaveTag();

    });
});