import LoginAdminPage from "../../PageObject/LoginAdminPage"
import PagePage from "../../PageObject/PagePage"
import PostPage from "../../PageObject/PostPage";
import TagPage from "../../PageObject/TagPage";
import Utility from "../../PageObject/Utility";
import { IStrategy } from "../../support/strategy/i-strategy";
import { StrategyFactory } from "../../support/strategy/strategy-factory";
require('@cypress/xpath');

describe("Cypress Filter tags to validate asociation post Test Suite", function () {
    let strategy: IStrategy;
    before(async () => {  
        strategy = await StrategyFactory.getStrategy();
      })

    it("Filter tags to validate asociation post with valid data", function () {

        //Given
        let namePost = strategy.getShortString();
        let descriptionPost = strategy.getShortString();
        let nameTag = "nameTag"+strategy.getLargeString();
        const login = new LoginAdminPage();   
        const utility = new Utility();

        //When    
        login.login();
        const tag = new TagPage();
        cy.wait(2000);        
        tag.navigate();
        tag.waitForTag();  
        cy.wait(1000); 
        tag.createTag();
        tag.enterNameTag(nameTag);
        tag.save();
        tag.waitForSaveTag();

        for (let i = 0; i <utility.getRandomInt(3) ; i++) {
            const page = new PostPage();
            cy.wait(1000);  
            page.navigate();
            cy.wait(1000);  
            page.createPost();
            page.enterNamePost(namePost);
            page.enterDescriptionPost(descriptionPost);
            cy.wait(1000);  
            page.selectPublish();
            page.publish();     
            page.waitForPublish();        
            page.closeWindowPublish();
            cy.wait(1000);  
            }
        let countPostWithTag = utility.getRandomInt(3)
            for (let i = 0; i < countPostWithTag ; i++) {
            const page = new PostPage();
            cy.wait(1000);  
            page.navigate();
            cy.wait(1000);  
            page.createPost();
            page.enterNamePost(namePost);
            page.enterDescriptionPost(descriptionPost);
    
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
        }        
        tag.navigate();
        cy.wait(3000);

        //Then     
        tag.validateTagsByName(nameTag, countPostWithTag);

    });

    it("Filter tags to validate asociation post with only numbers", function () {

        //Given
        let namePost = strategy.getShortString();
        let descriptionPost = strategy.getNumber();
        let nameTag = strategy.getNumber();
        const login = new LoginAdminPage();   
        const utility = new Utility();
        
        //When    
        login.login();
        const tag = new TagPage();
        cy.wait(2000);        
        tag.navigate();
        tag.waitForTag();  
        cy.wait(1000); 
        tag.createTag();
        tag.enterNameTag(nameTag);
        tag.save();
        tag.waitForSaveTag();

        for (let i = 0; i <utility.getRandomInt(3) ; i++) {
            const page = new PostPage();
            cy.wait(1000);  
            page.navigate();
            cy.wait(1000);  
            page.createPost();
            page.enterNamePost(namePost);
            page.enterDescriptionPost(descriptionPost);
            cy.wait(1000);  
            page.selectPublish();
            page.publish();     
            page.waitForPublish();        
            page.closeWindowPublish();
            cy.wait(1000);  
            }
        let countPostWithTag = utility.getRandomInt(3)
            for (let i = 0; i < countPostWithTag ; i++) {
            const page = new PostPage();
            cy.wait(1000);  
            page.navigate();
            cy.wait(1000);  
            page.createPost();
            page.enterNamePost(namePost);
            page.enterDescriptionPost(descriptionPost);
    
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
        }        
        tag.navigate();
        cy.wait(3000);

        //Then     
        tag.validateTagsByName(nameTag, countPostWithTag);

    });

    it("Filter tags to validate asociation post with naughty data", function () {

        //Given
        let namePost = strategy.getShortString();
        let descriptionPost = strategy.getNaughtyString();
        let nameTag = strategy.getNaughtyString();
        const login = new LoginAdminPage();   
        const utility = new Utility();
        
        //When    
        login.login();
        const tag = new TagPage();
        cy.wait(2000);        
        tag.navigate();
        tag.waitForTag();  
        cy.wait(1000); 
        tag.createTag();
        tag.enterNameTag(nameTag);
        tag.save();
        tag.waitForSaveTag();

        for (let i = 0; i <utility.getRandomInt(3) ; i++) {
            const page = new PostPage();
            cy.wait(1000);  
            page.navigate();
            cy.wait(1000);  
            page.createPost();
            page.enterNamePost(namePost);
            page.enterDescriptionPost(descriptionPost);
            cy.wait(1000);  
            page.selectPublish();
            page.publish();     
            page.waitForPublish();        
            page.closeWindowPublish();
            cy.wait(1000);  
            }
        let countPostWithTag = utility.getRandomInt(3)
            for (let i = 0; i < countPostWithTag ; i++) {
            const page = new PostPage();
            cy.wait(1000);  
            page.navigate();
            cy.wait(1000);  
            page.createPost();
            page.enterNamePost(namePost);
            page.enterDescriptionPost(descriptionPost);

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
        }        
        tag.navigate();
        cy.wait(3000);

        //Then     
        tag.validateTagsByName(nameTag, countPostWithTag);
    });

    it("Filter tags to validate asociation post with long data", function () {

        //Given
        let namePost = strategy.getLargeString();
        let descriptionPost = strategy.getLargeString();
        let nameTag = strategy.getLargeString();
        const login = new LoginAdminPage();   
        const utility = new Utility();

        //When    
        login.login();
        const tag = new TagPage();
        cy.wait(2000);        
        tag.navigate();
        tag.waitForTag();  
        cy.wait(1000); 
        tag.createTag();
        tag.enterNameTag(nameTag);
        tag.save();
        tag.waitForSaveTag();

        for (let i = 0; i <utility.getRandomInt(3) ; i++) {
            const page = new PostPage();
            cy.wait(1000);  
            page.navigate();
            cy.wait(1000);  
            page.createPost();
            page.enterNamePost(namePost);
            page.enterDescriptionPost(descriptionPost);
            cy.wait(1000);  
            page.selectPublish();
            page.publish();     
            page.waitForPublish();        
            page.closeWindowPublish();
            cy.wait(1000);  
            }
        let countPostWithTag = utility.getRandomInt(3)
            for (let i = 0; i < countPostWithTag ; i++) {
            const page = new PostPage();
            cy.wait(1000);  
            page.navigate();
            cy.wait(1000);  
            page.createPost();
            page.enterNamePost(namePost);
            page.enterDescriptionPost(descriptionPost);

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
        }        
        tag.navigate();
        cy.wait(3000);

        //Then     
        tag.validateTagsByName(nameTag, countPostWithTag);
    });
});