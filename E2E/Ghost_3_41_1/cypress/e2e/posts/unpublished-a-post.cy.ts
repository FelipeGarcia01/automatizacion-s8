import LoginPage from '../../PageObject/LoginPage'
import CreatePostPage from '../../PageObject/CreatePostPage'
import LandingPage from '../../PageObject/LandingPage'
import LabsPage from '../../PageObject/LabsPage'
import { IStrategy } from '../../support/strategy/i-strategy'
import { StrategyFactory } from "../../support/strategy/strategy-factory"
import PostsPage from "../../PageObject/PostsPage";
require('@cypress/xpath')
let config =  require("../../../config.json")


describe('Unpublished a post', () => {
  let strategy: IStrategy;
  before(async () => {
    strategy = await StrategyFactory.getStrategy();
  })

  it('Create, publish, unpublished and validate post with correct data', () => {
    // Given
    let title = strategy.getShortString()
    let body = strategy.getLargeString()
    LoginPage.login(config.logIn.userName, config.logIn.userPass)
    LabsPage.clearAdmin()

    // When
    CreatePostPage.createPost(title, body)
    CreatePostPage.publishPost()
    PostsPage.enterPost(title)
    CreatePostPage.unpublishedPost()

    // Then
    PostsPage.validateDraftPost()
  })

  it('Create, publish, unpublished and validate post with incorrect data', () => {
    // Given
    let title = strategy.getNumber()
    let title2 = strategy.getNaughtyString()
    let body = strategy.getNaughtyString()
    LoginPage.login(config.logIn.userName, config.logIn.userPass)
    LabsPage.clearAdmin()

    // When
    CreatePostPage.createPost(title, body)
    CreatePostPage.publishPost()
    PostsPage.enterPost(title2)
    CreatePostPage.unpublishedPost()

    // Then
    PostsPage.validateDraftPost()
  })
})
