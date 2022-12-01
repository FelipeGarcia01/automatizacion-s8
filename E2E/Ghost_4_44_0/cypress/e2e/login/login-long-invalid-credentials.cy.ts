import { LoginPage } from '../../PageObject/login-page';
import { StrategyFactory } from '../../support/strategy/strategy-factory';
import { IStrategy } from '../../support/strategy/i-strategy';

describe('Scenario10',()=>{

    let strategy: IStrategy;
    let logInPage = new LoginPage();
    before(async () =>{
      strategy = await StrategyFactory.getStrategy();
    })

    it ('Login with invalid credentials', () => {
        logInPage.resolveStrategy(strategy,"largStringBoth");
        logInPage.doFailLogIn();
    });

});
