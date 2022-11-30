import { LoginPage } from '../../PageObject/login-page-d.js';
import { StrategyFactory } from '../../support/strategy/strategy-factory';
import { IStrategy } from '../../support/strategy/i-strategy';

describe('Scenario8',()=>{

    let strategy: IStrategy;
  
    before(async () =>{
      strategy = await StrategyFactory.getStrategy();
    })

    it ('Login with empty user', () => {
        let userText = '';
        let passText = strategy.getShortString();
        let loginPage = new LoginPage(userText, passText);
        loginPage.doFailLogIn();
    });

});
