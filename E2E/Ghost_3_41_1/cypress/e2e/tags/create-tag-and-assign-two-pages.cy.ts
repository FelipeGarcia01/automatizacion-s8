import LoginAdminPage from "../../PageObject/LoginAdminPage"
import PagePage from "../../PageObject/PagePage"
import { IStrategy } from "../../support/strategy/i-strategy";
import { StrategyFactory } from "../../support/strategy/strategy-factory";
import TagPage from "../../PageObject/TagPage"

require('@cypress/xpath');

describe("Cypress create tag and assign in pages Test Suite", function () {
    let strategy: IStrategy;
    before(async () => {  
        strategy = await StrategyFactory.getStrategy();
      })

    it("Create tag and assign in pages with valid data", function () {

        //Given
        let namePage1 = "page"+strategy.getShortString();
        let namePage2 = "page1"+strategy.getShortString();
        let descriptionPage = "baseDescriptionPage1"+strategy.getShortString();
        let descriptionPage1 = "descriptionPage1"+strategy.getLargeString();
        let descriptionPage2 = "descriptionPage1"+strategy.getLargeString();
        let countPostWithTag = 2;
        let nameTag = strategy.getTagName();

        //When
        const login = new LoginAdminPage();        
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

        //Page1
        const page = new PagePage();
        cy.wait(1000);  
        page.navigate();
        cy.wait(1000);  
        page.createPage();
        page.enterNamePage(namePage1);
        page.enterDescriptionPage(descriptionPage);
        cy.wait(1000);  
        page.selectPublish();
        page.publish();     
        page.waitForPublish();        
        page.closeWindowPublish();
        //Edit Description
        page.enterDescriptionPage(descriptionPage1);
        page.selectPublish();
        page.publish();     
        page.waitForPublish();  

        page.selectSetting();
        cy.wait(3000);  
        page.listTag();
        page.selectTag(nameTag);
        page.closePostSettings();
        cy.wait(2000);  
        page.selectPublish();
        cy.wait(2000);  
        page.publish();     
        page.waitForPublish();        
        page.closeWindowPublish();
        cy.wait(1000);
        //Page2  
        cy.wait(1000); 
        const page2 = new PagePage();
        cy.wait(1000);  
        page2.navigate();
        cy.wait(1000);  
        page2.createPage();
        page2.enterNamePage(namePage2);
        page2.enterDescriptionPage(descriptionPage);
        cy.wait(1000);  
        page2.selectPublish();
        page2.publish();     
        page2.waitForPublish();        
        page2.closeWindowPublish();
        //Edit Description
        page2.enterDescriptionPage(descriptionPage2);
        page2.selectPublish();
        page2.publish();     
        page2.waitForPublish();   

        page2.selectSetting();
        cy.wait(3000);  
        page2.listTag();
        page2.selectTag(nameTag);
        page2.closePostSettings();
        cy.wait(2000);  
        page2.selectPublish();
        cy.wait(2000);  
        page2.publish();     
        page2.waitForPublish();        
        page2.closeWindowPublish();
        cy.wait(1000);
          
        //Then

        tag.navigate();
        cy.wait(3000);          
        tag.validateTagsByName(nameTag, countPostWithTag);
    });

    it("Create tag and assign in pages with only numbers", function () {

        //Given
        let namePage1 = "page"+strategy.getShortString();
        let namePage2 = "page1"+strategy.getShortString();
        let descriptionPage = 3+strategy.getNumber();
        let descriptionPage1 = 4+strategy.getNumber();
        let descriptionPage2 = 5+strategy.getNumber();
        let countPostWithTag = 2;
        let nameTag = strategy.getNumber();
        //When
        const login = new LoginAdminPage();        
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

        //Page1
        const page = new PagePage();
        cy.wait(1000);  
        page.navigate();
        cy.wait(1000);  
        page.createPage();
        page.enterNamePage(namePage1);
        page.enterDescriptionPage(descriptionPage);
        cy.wait(1000);  
        page.selectPublish();
        page.publish();     
        page.waitForPublish();        
        page.closeWindowPublish();
        //Edit Description
        page.enterDescriptionPage(descriptionPage1);
        page.selectPublish();
        page.publish();     
        page.waitForPublish();  

        page.selectSetting();
        cy.wait(3000);  
        page.listTag();
        page.selectTag(nameTag);
        page.closePostSettings();
        cy.wait(2000);  
        page.selectPublish();
        cy.wait(2000);  
        page.publish();     
        page.waitForPublish();        
        page.closeWindowPublish();
        cy.wait(1000);
        //Page2  
        cy.wait(1000); 
        const page2 = new PagePage();
        cy.wait(1000);  
        page2.navigate();
        cy.wait(1000);  
        page2.createPage();
        page2.enterNamePage(namePage2);
        page2.enterDescriptionPage(descriptionPage);
        cy.wait(1000);  
        page2.selectPublish();
        page2.publish();     
        page2.waitForPublish();        
        page2.closeWindowPublish();
        //Edit Description
        page2.enterDescriptionPage(descriptionPage2);
        page2.selectPublish();
        page2.publish();     
        page2.waitForPublish();   

        page2.selectSetting();
        cy.wait(3000);  
        page2.listTag();
        page2.selectTag(nameTag);
        page2.closePostSettings();
        cy.wait(2000);  
        page2.selectPublish();
        cy.wait(2000);  
        page2.publish();     
        page2.waitForPublish();        
        page2.closeWindowPublish();
        cy.wait(1000);
          
        //Then
        tag.navigate();
        cy.wait(3000);          
        tag.validateTagsByName(nameTag, countPostWithTag);
    });

    it("Create tag and assign in pages with naughty data", function () {
        
        //Given
        let namePage1 = "page"+strategy.getShortString();
        let namePage2 = "page1"+strategy.getShortString();
        let descriptionPage = strategy.getNaughtyString();;
        let descriptionPage1 = strategy.getNaughtyString()+"1";;
        let descriptionPage2 = strategy.getNaughtyString()+"2";;
        let countPostWithTag = 2;
        let nameTag = strategy.getNaughtyString();
        //When
        const login = new LoginAdminPage();        
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

        //Page1
        const page = new PagePage();
        cy.wait(1000);  
        page.navigate();
        cy.wait(1000);  
        page.createPage();
        page.enterNamePage(namePage1);
        page.enterDescriptionPage(descriptionPage);
        cy.wait(1000);  
        page.selectPublish();
        page.publish();     
        page.waitForPublish();        
        page.closeWindowPublish();
        //Edit Description
        page.enterDescriptionPage(descriptionPage1);
        page.selectPublish();
        page.publish();     
        page.waitForPublish();  

        page.selectSetting();
        cy.wait(3000);  
        page.listTag();
        page.selectTag(nameTag);
        page.closePostSettings();
        cy.wait(2000);  
        page.selectPublish();
        cy.wait(2000);  
        page.publish();     
        page.waitForPublish();        
        page.closeWindowPublish();
        cy.wait(1000);
        //Page2  
        cy.wait(1000); 
        const page2 = new PagePage();
        cy.wait(1000);  
        page2.navigate();
        cy.wait(1000);  
        page2.createPage();
        page2.enterNamePage(namePage2);
        page2.enterDescriptionPage(descriptionPage);
        cy.wait(1000);  
        page2.selectPublish();
        page2.publish();     
        page2.waitForPublish();        
        page2.closeWindowPublish();
        //Edit Description
        page2.enterDescriptionPage(descriptionPage2);
        page2.selectPublish();
        page2.publish();     
        page2.waitForPublish();   

        page2.selectSetting();
        cy.wait(3000);  
        page2.listTag();
        page2.selectTag(nameTag);
        page2.closePostSettings();
        cy.wait(2000);  
        page2.selectPublish();
        cy.wait(2000);  
        page2.publish();     
        page2.waitForPublish();        
        page2.closeWindowPublish();
        cy.wait(1000);
          
        //Then
        tag.navigate();
        cy.wait(3000);          
        tag.validateTagsByName(nameTag, countPostWithTag);
    });

    it("Create tag and assign in pages with long data", function () {

        //Given
        let namePage1 = "page"+strategy.getLargeString();
        let namePage2 = "page1"+strategy.getLargeString();
        let descriptionPage = "baseDescriptionPage1"+strategy.getLargeString();
        let descriptionPage1 = "descriptionPage1"+strategy.getLargeString();
        let descriptionPage2 = "descriptionPage1"+strategy.getLargeString();
        let countPostWithTag = 2;
        let nameTag = strategy.getLargeString();
        //When
        const login = new LoginAdminPage();        
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

        //Page1
        const page = new PagePage();
        cy.wait(1000);  
        page.navigate();
        cy.wait(1000);  
        page.createPage();
        page.enterNamePage(namePage1);
        page.enterDescriptionPage(descriptionPage);
        cy.wait(1000);  
        page.selectPublish();
        page.publish();     
        page.waitForPublish();        
        page.closeWindowPublish();
        //Edit Description
        page.enterDescriptionPage(descriptionPage1);
        page.selectPublish();
        page.publish();     
        page.waitForPublish();  

        page.selectSetting();
        cy.wait(3000);  
        page.listTag();
        page.selectTag(nameTag);
        page.closePostSettings();
        cy.wait(2000);  
        page.selectPublish();
        cy.wait(2000);  
        page.publish();     
        page.waitForPublish();        
        page.closeWindowPublish();
        cy.wait(1000);
        //Page2  
        cy.wait(1000); 
        const page2 = new PagePage();
        cy.wait(1000);  
        page2.navigate();
        cy.wait(1000);  
        page2.createPage();
        page2.enterNamePage(namePage2);
        page2.enterDescriptionPage(descriptionPage);
        cy.wait(1000);  
        page2.selectPublish();
        page2.publish();     
        page2.waitForPublish();        
        page2.closeWindowPublish();
        //Edit Description
        page2.enterDescriptionPage(descriptionPage2);
        page2.selectPublish();
        page2.publish();     
        page2.waitForPublish();   

        page2.selectSetting();
        cy.wait(3000);  
        page2.listTag();
        page2.selectTag(nameTag);
        page2.closePostSettings();
        cy.wait(2000);  
        page2.selectPublish();
        cy.wait(2000);  
        page2.publish();     
        page2.waitForPublish();        
        page2.closeWindowPublish();
        cy.wait(1000);
          
        //Then        
        tag.navigate();
        cy.wait(3000);          
        tag.validateTagsByName(nameTag, countPostWithTag);
    });
});