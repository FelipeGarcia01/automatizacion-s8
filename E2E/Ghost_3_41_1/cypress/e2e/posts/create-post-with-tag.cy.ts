import LoginPage from '../../PageObject/LoginPage'
import CreatePostPage from '../../PageObject/CreatePostPage'
import TagsPage from '../../PageObject/TagsPage'
import LabsPage from '../../PageObject/LabsPage'
import { IStrategy } from '../../support/strategy/i-strategy'
import { StrategyFactory } from "../../support/strategy/strategy-factory";
require('@cypress/xpath')
let config =  require("../../../config.json")


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
    LoginPage.login(config.logIn.userName, config.logIn.userPass)
    LabsPage.clearAdmin()

    //When
    CreatePostPage.createPost(title, body)
    CreatePostPage.createTagFromPost(tag)

    //Then
    TagsPage.validateTag(tag)
  })

  it('Create and validate tag with incorrect data', function () {
    // Given
    let title = strategy.getNaughtyString()
    let body = strategy.getNaughtyString()
    let tag = strategy.getNaughtyString()
    LoginPage.login(config.logIn.userName, config.logIn.userPass)
    LabsPage.clearAdmin()

    //When
    CreatePostPage.createPost(title, body)
    CreatePostPage.createTagFromPost(tag)

    //Then
    TagsPage.validateTag(tag)
  })
})
