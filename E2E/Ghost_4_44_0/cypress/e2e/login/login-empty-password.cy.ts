
import { StrategyFactory } from '../../support/strategy/strategy-factory';
import { IStrategy } from '../../support/strategy/i-strategy';
import { LoginPage } from '../../PageObject/login-page';

describe('Scenario6',()=>{
    
    let strategy: IStrategy;
    let logInPage = new LoginPage();
  
    before(async () =>{
      strategy = await StrategyFactory.getStrategy();
    })

    it ('Login with no password', () => {
        logInPage.resolveStrategy(strategy,"shortString");
        logInPage.doFailLogIn();
    });

});
