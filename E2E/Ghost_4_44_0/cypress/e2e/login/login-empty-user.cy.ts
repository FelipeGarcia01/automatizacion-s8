import { LoginPage } from '../../PageObject/login-page';
import { StrategyFactory } from '../../support/strategy/strategy-factory';
import { IStrategy } from '../../support/strategy/i-strategy';

describe('Scenario8',()=>{

    let strategy: IStrategy;
    let logInPage = new LoginPage();
    before(async () =>{
      strategy = await StrategyFactory.getStrategy();
    })

    it ('Login with empty user', () => {
        logInPage.resolveStrategy(strategy,"shortStringPss");
        logInPage.doFailLogIn();
    });

});
