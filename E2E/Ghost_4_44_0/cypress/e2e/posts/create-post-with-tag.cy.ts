import CreatePostPage from '../../PageObject/CreatePostPage'
import TagsPage from '../../PageObject/TagsPage'
import { IStrategy } from '../../support/strategy/i-strategy'
import { StrategyFactory } from "../../support/strategy/strategy-factory";
import { LoginPage } from '../../PageObject/login-page';
import { LabsPage } from "../../PageObject/labs-page";

require('@cypress/xpath')
let logInPage = new LoginPage();
let labPage = new LabsPage();
describe('Create tag from post', function () {
  let strategy: IStrategy;
  before(async () => {
    strategy = await StrategyFactory.getStrategy();
  })

  it('Create and validate tag with correct data', () => {
    // Given
    let title = strategy.getShortString()
    let body = strategy.getLargeString()
    let tag = strategy.getTagName()
    
    logInPage.doLogIn()
    labPage.clearAdmin()

    //When
    CreatePostPage.createPost(title, body)
    CreatePostPage.createTagFromPost(tag)
    CreatePostPage.publishPost();
    //Then
    TagsPage.validateTag(tag)
  })

  it('Create and validate tag with incorrect data', function () {
    // Given
    let title = strategy.getNaughtyString()
    let body = strategy.getNaughtyString()
    let tag = strategy.getNaughtyString()
    
    logInPage.doLogIn()
    labPage.clearAdmin()

    //When
    CreatePostPage.createPost(title, body)
    CreatePostPage.createTagFromPost(tag)
    CreatePostPage.publishPost();
    //Then
    TagsPage.validateTag(tag)
  })
})
