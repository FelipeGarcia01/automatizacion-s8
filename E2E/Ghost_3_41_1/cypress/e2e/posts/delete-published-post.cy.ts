import LoginPage from '../../PageObject/LoginPage'
import CreatePostPage from '../../PageObject/CreatePostPage'
import LabsPage from '../../PageObject/LabsPage'
import { IStrategy } from '../../support/strategy/i-strategy'
import { StrategyFactory } from "../../support/strategy/strategy-factory"
import PostsPage from "../../PageObject/PostsPage";
require('@cypress/xpath')
let config =  require("../../../config.json")


describe('Delete published post', () => {
  let strategy: IStrategy;
  before(async () => {
    strategy = await StrategyFactory.getStrategy();
  })

  it('Create, publish, delete and validate post with correct data', () => {
    // Given
    let title = strategy.getShortString()
    let body = strategy.getLargeString()
    LoginPage.login(config.logIn.userName, config.logIn.userPass)
    LabsPage.clearAdmin()
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
    LoginPage.login(config.logIn.userName, config.logIn.userPass)
    LabsPage.clearAdmin()
    CreatePostPage.createPost(title, body)
    CreatePostPage.publishPost()

    // When
    PostsPage.enterPost(title2)
    CreatePostPage.deletePost()

    // Then
    PostsPage.validateDeletePost()
  })
})
