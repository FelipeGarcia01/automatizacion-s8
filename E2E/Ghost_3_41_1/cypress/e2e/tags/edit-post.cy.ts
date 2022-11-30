import { LoginPage } from "../../PageObject/login-page";
import PostPage from "../../PageObject/PostPage"
import { IStrategy } from "../../support/strategy/i-strategy";
import { StrategyFactory } from "../../support/strategy/strategy-factory";
require('@cypress/xpath');

describe("Cypress Edit post Test Suite", function () {
    let strategy: IStrategy;
    let logInPage = new LoginPage();

    before(async () => {  
        strategy = await StrategyFactory.getStrategy();
      })

    it("Edit post with valid data", function () {

        //Given
        let namePost = "post"+strategy.getShortString();
        let descriptionPost = "descriptionPost"+strategy.getShortString();
        let newValueDescription = "newValueDescription"+strategy.getLargeString();
 
        
        //when
        logInPage.doLogIn();
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
        
        //When
        logInPage.doLogIn();
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