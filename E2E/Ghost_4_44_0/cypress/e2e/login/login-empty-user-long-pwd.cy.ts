import { LoginPage } from '../../PageObject/login-page';
import { StrategyFactory } from '../../support/strategy/strategy-factory';
import { IStrategy } from '../../support/strategy/i-strategy';

describe('Scenario7',()=>{

    let strategy: IStrategy;
    let logInPage = new LoginPage();
    before(async () =>{
      strategy = await StrategyFactory.getStrategy();
    })

    it ('Login with no user and long password', () => {
      logInPage.resolveStrategy(strategy,"largeStringPss");  
      logInPage.doFailLogIn();
    });

});
