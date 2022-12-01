
import CreatePostPage from '../../PageObject/CreatePostPage'
import { IStrategy } from '../../support/strategy/i-strategy'
import { StrategyFactory } from "../../support/strategy/strategy-factory"
import PostsPage from "../../PageObject/PostsPage";
import { LoginPage } from '../../PageObject/login-page';
import { LabsPage } from '../../PageObject/labs-page';
require('@cypress/xpath')


describe('Delete published post', () => {
  let strategy: IStrategy;
  let logInPage = new LoginPage();
  let labPage = new LabsPage();
  before(async () => {
    strategy = await StrategyFactory.getStrategy();
  })

  it('Create, publish, delete and validate post with correct data', () => {
    // Given
    let title = strategy.getShortString()
    let body = strategy.getLargeString()
    logInPage.doLogIn()
    labPage.clearAdmin()
    CreatePostPage.createPost(title, body)
    CreatePostPage.publishPost()

    // When
    PostsPage.enterPost(title)
    CreatePostPage.deletePost()

    // Then
    PostsPage.validateDeletePost()
  })

  it('Create, publish, delete and validate post with incorrect data', () => {
    // Given
    let title = strategy.getNaughtyString()
    let title2 = strategy.getNaughtyString()
    let body = strategy.getNaughtyString()
    logInPage.doLogIn()
    labPage.clearAdmin()
    CreatePostPage.createPost(title, body)
    CreatePostPage.publishPost()

    // When
    PostsPage.enterPost(title2)
    CreatePostPage.deletePost()

    // Then
    PostsPage.validateDeletePost()
  })
})
