import { LoginPage } from "../../PageObject/login-page"
import PostPage from "../../PageObject/PostPage"
import TagPage from "../../PageObject/TagPage";
import { IStrategy } from "../../support/strategy/i-strategy";
import { StrategyFactory } from "../../support/strategy/strategy-factory";
require('@cypress/xpath');

describe("Create empty tag usign nauthty data and assign to post Test Suite", function () {
    let strategy: IStrategy;
    let logInPage = new LoginPage();

    before(async () => {  
        strategy = await StrategyFactory.getStrategy();
      })

    it("Create empty tag usign nauthty data and assign to post with valid data", function () {

        //Given
        let namePost = strategy.getShortString();
        let descriptionPost = strategy.getShortString();
        let nameTag = strategy.getNaughtyString();
  
        
        //When
        logInPage.doLogIn();           
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
        page.confirmPublish(); 
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