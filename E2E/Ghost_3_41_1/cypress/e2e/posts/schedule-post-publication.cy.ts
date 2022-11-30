import CreatePostPage from '../../PageObject/CreatePostPage'
import PostsPage from '../../PageObject/PostsPage'
import LabsPage from '../../PageObject/LabsPage'
import { IStrategy } from '../../support/strategy/i-strategy'
import { StrategyFactory } from "../../support/strategy/strategy-factory";
import { LoginPage } from '../../PageObject/login-page';
require('@cypress/xpath')


describe('Schedule post publication', () => {
  let strategy: IStrategy;
  let logInPage = new LoginPage();
  
  before(async () => {
    strategy = await StrategyFactory.getStrategy();
  })

  it('Create, schedule publication and validate post publication schedule with correct data', () => {
    // Given
    let title = strategy.getShortString()
    let body = strategy.getLargeString()
    logInPage.doLogIn()
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
    logInPage.doLogIn()
    LabsPage.clearAdmin()

    // When
    CreatePostPage.createPost(title, body)
    CreatePostPage.schedulePostPublication()

    // Then
    PostsPage.validateSchedulePost(title)
  })
})
