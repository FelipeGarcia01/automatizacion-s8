import LoginPage from '../../PageObject/LoginPage'
import CreatePostPage from '../../PageObject/CreatePostPage'
import LandingPage from '../../PageObject/LandingPage'
import LabsPage from '../../PageObject/LabsPage'
import { IStrategy } from '../../support/strategy/i-strategy'
import { StrategyFactory } from "../../support/strategy/strategy-factory"
require('@cypress/xpath')
let config =  require("../../../config.json")


describe('Publish a post', () => {
  let strategy: IStrategy;
  before(async () => {
    strategy = await StrategyFactory.getStrategy();
  })

  it('Create, publish and validate post with correct data', () => {
    // Given
    let title = strategy.getShortString()
    let body = strategy.getLargeString()
    LoginPage.login(config.logIn.userName, config.logIn.userPass)
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
    LoginPage.login(config.logIn.userName, config.logIn.userPass)
    LabsPage.clearAdmin()

    // When
    CreatePostPage.createPost(title, body)
    CreatePostPage.publishPost()

    // Then
    LandingPage.ValidatePost(title, body)
  })
})
