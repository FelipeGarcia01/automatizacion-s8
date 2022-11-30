import LoginPage from '../../PageObject/LoginPage'
import CreatePostPage from '../../PageObject/CreatePostPage'
import PostsPage from '../../PageObject/PostsPage'
import LabsPage from '../../PageObject/LabsPage'
import { IStrategy } from '../../support/strategy/i-strategy'
import { StrategyFactory } from "../../support/strategy/strategy-factory";
require('@cypress/xpath')
let config =  require("../../../config.json")


describe('Schedule post publication', () => {
  let strategy: IStrategy;
  before(async () => {
    strategy = await StrategyFactory.getStrategy();
  })

  it('Create, schedule publication and validate post publication schedule with correct data', () => {
    // Given
    let title = strategy.getShortString()
    let body = strategy.getLargeString()
    LoginPage.login(config.logIn.userName, config.logIn.userPass)
    LabsPage.clearAdmin()

    // When
    CreatePostPage.createPost(title, body)
    CreatePostPage.schedulePostPublication()

    // Then
    PostsPage.validateSchedulePost(title)
  })

  it('Create, schedule publication and validate post publication schedule with incorrect data', () => {
    // Given
    let title = strategy.getNaughtyString()
    let body = strategy.getNaughtyString()
    LoginPage.login(config.logIn.userName, config.logIn.userPass)
    LabsPage.clearAdmin()

    // When
    CreatePostPage.createPost(title, body)
    CreatePostPage.schedulePostPublication()

    // Then
    PostsPage.validateSchedulePost(title)
  })
})
