import LoginAdminPage from "../../PageObject/LoginAdminPage"
import PostPage from "../../PageObject/PostPage"
import TagPage from "../../PageObject/TagPage";
import { IStrategy } from "../../support/strategy/i-strategy";
import { StrategyFactory } from "../../support/strategy/strategy-factory";
require('@cypress/xpath');

describe("Cypress Create tag and assign to post Test Suite", function () {
    let strategy: IStrategy;
    before(async () => {  
        strategy = await StrategyFactory.getStrategy();
      })

    it("Create tag and assign to post with valid data", function () {

        //Given
        let namePost = strategy.getShortString();
        let descriptionPost = strategy.getShortString();
        let nameTag = "nameTag"+strategy.getLargeString();
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
        cy.wait(1000);  
        page.selectPublish();
        page.publish();     
        page.waitForPublish();        
        page.closeWindowPublish();
        page.navigate();
        cy.wait(3000);  
        page.listFilterTags();
        page.selectFilterTag(nameTag);

        //Then
        page.findPostInFilter(namePost);


    });

    it("Create tag and assign to post with only numbers", function () {
        //Given
        let namePost = strategy.getShortString();
        let descriptionPost = strategy.getNumber();
        let nameTag = "nameTag"+strategy.getNumber();
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
        cy.wait(1000);        
        page.selectTag(nameTag);
        cy.wait(1000);
        page.closePostSettings();
        cy.wait(1000);  
        page.selectPublish();
        page.publish();     
        page.waitForPublish();        
        page.closeWindowPublish();
        page.navigate();
        cy.wait(3000);  
        page.listFilterTags();
        page.selectFilterTag(nameTag);

        //Then
        page.findPostInFilter(namePost);
        

    });

    it("Create tag and assign to post with naughty data", function () {
        //Given
        let namePost = strategy.getShortString();
        let descriptionPost = strategy.getNaughtyString();
        let nameTag = strategy.getNaughtyString();
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
        cy.wait(1000);       
        page.selectTag(nameTag);
        cy.wait(1000);
        page.closePostSettings();
        cy.wait(1000);  
        page.selectPublish();
        page.publish();     
        page.waitForPublish();        
        page.closeWindowPublish();
        page.navigate();
        cy.wait(3000);  
        page.listFilterTags();
        page.selectFilterTag(nameTag);

        //Then
        page.findPostInFilter(namePost);  


        
    });

    it("Create tag and assign to post with long data", function () {
        //Given
        let namePost = strategy.getShortString();
        let descriptionPost = strategy.getLargeString();
        let nameTag = strategy.getLargeString();
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
        cy.wait(1000);  
        page.selectPublish();
        page.publish();     
        page.waitForPublish();        
        page.closeWindowPublish();
        page.navigate();
        cy.wait(3000);  
        page.listFilterTags();
        page.selectFilterTag(nameTag);

        //Then
        page.findPostInFilter(namePost); 

       
    });
});