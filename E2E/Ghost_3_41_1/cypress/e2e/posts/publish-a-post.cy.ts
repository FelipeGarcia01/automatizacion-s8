import CreatePostPage from '../../PageObject/CreatePostPage'
import LandingPage from '../../PageObject/LandingPage'
import LabsPage from '../../PageObject/LabsPage'
import { IStrategy } from '../../support/strategy/i-strategy'
import { StrategyFactory } from "../../support/strategy/strategy-factory"
import { LoginPage } from '../../PageObject/login-page'
require('@cypress/xpath')


describe('Publish a post', () => {
  let strategy: IStrategy;
  let logInPage = new LoginPage();

  before(async () => {
    strategy = await StrategyFactory.getStrategy();
  })

  it('Create, publish and validate post with correct data', () => {
    // Given
    let title = strategy.getShortString()
    let body = strategy.getLargeString()
    logInPage.doLogIn()
    LabsPage.clearAdmin()

    // When
    CreatePostPage.createPost(title, body)
    CreatePostPage.publishPost()

    // Then
    LandingPage.ValidatePost(title, body)
  })

  it('Create, publish and validate post with incorrect data', () => {
    // Given
    let title = strategy.getNaughtyString()
    let body = strategy.getNaughtyString()
    logInPage.doLogIn()
    LabsPage.clearAdmin()

    // When
    CreatePostPage.createPost(title, body)
    CreatePostPage.publishPost()

    // Then
    LandingPage.ValidatePost(title, body)
  })
})
