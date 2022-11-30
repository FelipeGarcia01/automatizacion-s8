import { LoginPage } from '../../PageObject/login-page-d.js';
import { StrategyFactory } from '../../support/strategy/strategy-factory';
import { IStrategy } from '../../support/strategy/i-strategy';

describe('Scenario6',()=>{
    
    let strategy: IStrategy;
  
    before(async () =>{
      strategy = await StrategyFactory.getStrategy();
    })

    it ('Login with no password', () => {
        let userText = strategy.getShortString();
        let passText = '';
        let loginPage = new LoginPage(userText, passText);
        loginPage.doFailLogIn();
    });

});
