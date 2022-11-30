import { LoginPage } from '../../PageObject/login-page-d.js';
import { StrategyFactory } from '../../support/strategy/strategy-factory';
import { IStrategy } from '../../support/strategy/i-strategy';

describe('Scenario7',()=>{

    let strategy: IStrategy;
  
    before(async () =>{
      strategy = await StrategyFactory.getStrategy();
    })

    it ('Login with no user and long password', () => {
        let userText = '';
        let passText = strategy.getLargeString();
        let loginPage = new LoginPage(userText, passText);
        loginPage.doFailLogIn();
    });

});
