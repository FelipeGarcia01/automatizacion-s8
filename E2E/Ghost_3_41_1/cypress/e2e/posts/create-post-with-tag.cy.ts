import CreatePostPage from '../../PageObject/CreatePostPage'
import TagsPage from '../../PageObject/TagsPage'
import LabsPage from '../../PageObject/LabsPage'
import { IStrategy } from '../../support/strategy/i-strategy'
import { StrategyFactory } from "../../support/strategy/strategy-factory";
import { LoginPage } from '../../PageObject/login-page';


require('@cypress/xpath')
let logInPage = new LoginPage();

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
    LabsPage.clearAdmin()

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
    LabsPage.clearAdmin()

    //When
    CreatePostPage.createPost(title, body)
    CreatePostPage.createTagFromPost(tag)
    CreatePostPage.publishPost();
    //Then
    TagsPage.validateTag(tag)
  })
})
