import LoginAdminPage from "../../PageObject/LoginAdminPage"
import PostPage from "../../PageObject/PostPage"
import { IStrategy } from "../../support/strategy/i-strategy";
import { StrategyFactory } from "../../support/strategy/strategy-factory";
require('@cypress/xpath');

describe("Cypress Edit post Test Suite", function () {
    let strategy: IStrategy;
    before(async () => {  
        strategy = await StrategyFactory.getStrategy();
      })

    it("Edit post with valid data", function () {

        //Given
        let namePost = "post"+strategy.getShortString();
        let descriptionPost = "descriptionPost"+strategy.getShortString();
        let newValueDescription = "newValueDescription"+strategy.getLargeString();
        const login = new LoginAdminPage();   
        
        //when
        login.login();
        const page = new PostPage();
        page.navigate();
        page.createPost();
        page.enterNamePost(namePost);
        page.enterDescriptionPost(descriptionPost);
        page.selectPublish();
        page.publish();        
        page.waitForPublish();        
        page.closeWindowPublish();        
        page.enterDescriptionPost(newValueDescription );
        page.selectPublish();
        page.publish();        
        page.waitForPublish();        
        page.closeWindowPublish();
        page.navigateIndex();

        //Then
        page.isModifyPost(newValueDescription);  

    });

    it("Edit post with only numbers", function () {
        //Given
        let namePost = strategy.getNumber();
        let descriptionPost = strategy.getNumber();
        let newValueDescription = strategy.getNumber();
        const login = new LoginAdminPage();   
        
        //when
        login.login();
        const page = new PostPage();
        page.navigate();
        page.createPost();
        page.enterNamePost(namePost);
        page.enterDescriptionPost(descriptionPost);
        page.selectPublish();
        page.publish();        
        page.waitForPublish();        
        page.closeWindowPublish();        
        page.enterDescriptionPost(newValueDescription );
        page.selectPublish();
        page.publish();        
        page.waitForPublish();        
        page.closeWindowPublish();
        page.navigateIndex();

        //Then
        page.isModifyPost(newValueDescription);  
    });

    it("Edit post with naughty data", function () {
        //Given
        let namePost = strategy.getNaughtyString();
        let descriptionPost = strategy.getNaughtyString();
        let newValueDescription = strategy.getNaughtyString();
        const login = new LoginAdminPage();   

        //when
        login.login();
        const page = new PostPage();
        page.navigate();
        page.createPost();
        page.enterNamePost(namePost);
        page.enterDescriptionPost(descriptionPost);
        page.selectPublish();
        page.publish();        
        page.waitForPublish();        
        page.closeWindowPublish();        
        page.enterDescriptionPost(newValueDescription );
        page.selectPublish();
        page.publish();        
        page.waitForPublish();        
        page.closeWindowPublish();
        page.navigateIndex();

        //Then
        page.isModifyPost(newValueDescription); 
        
    });

    it("Edit post with long data", function () {
        //Given
        let namePost = strategy.getLargeString();
        let descriptionPost = strategy.getLargeString();
        let newValueDescription = strategy.getLargeString();
        const login = new LoginAdminPage();   

        //when
        login.login();
        const page = new PostPage();
        page.navigate();
        page.createPost();
        page.enterNamePost(namePost);
        page.enterDescriptionPost(descriptionPost);
        page.selectPublish();
        page.publish();        
        page.waitForPublish();        
        page.closeWindowPublish();        
        page.enterDescriptionPost(newValueDescription );
        page.selectPublish();
        page.publish();        
        page.waitForPublish();        
        page.closeWindowPublish();
        page.navigateIndex();

        //Then
        page.isModifyPost(newValueDescription); 
       
    });
});