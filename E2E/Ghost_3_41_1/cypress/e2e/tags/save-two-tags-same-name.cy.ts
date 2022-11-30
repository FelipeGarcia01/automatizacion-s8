import LoginAdminPage from "../../PageObject/LoginAdminPage"
import TagPage from "../../PageObject/TagPage";
import { IStrategy } from "../../support/strategy/i-strategy";
import { StrategyFactory } from "../../support/strategy/strategy-factory";
require('@cypress/xpath');

describe("Cypress Create a tag and save two tags with the same name  Test Suite", function () {
    let strategy: IStrategy;
    before(async () => {  
        strategy = await StrategyFactory.getStrategy();
      })

    it("Create a tag and save two tags with the same name with valid data", function () {

        //Given
        let nameTag = strategy.getTagName();
        const login = new LoginAdminPage();   
        
        //When
        login.login();            
        const tag = new TagPage();
        cy.wait(1000);        
        tag.navigate();
        tag.waitForTag();  
        cy.wait(1000); 
        tag.createTag();
        tag.enterNameTag(nameTag);
        tag.save();
        tag.waitForSaveTag();
        cy.wait(1000);          
        const tag1 = new TagPage();
        cy.wait(1000);        
        tag1.navigate();
        tag1.waitForTag();  
        cy.wait(1000); 
        tag1.createTag();
        tag1.enterNameTag(nameTag);        
        
        //Then
        tag1.save();
        tag1.waitForSaveTag();

    });
});