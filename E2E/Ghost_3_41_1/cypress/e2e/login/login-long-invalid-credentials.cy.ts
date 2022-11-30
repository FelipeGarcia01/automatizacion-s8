import { LoginPage } from '../../PageObject/login-page-d.js';
import { StrategyFactory } from '../../support/strategy/strategy-factory';
import { IStrategy } from '../../support/strategy/i-strategy';

describe('Scenario10',()=>{

    let strategy: IStrategy;
  
    before(async () =>{
      strategy = await StrategyFactory.getStrategy();
    })

    it ('Login with long invalid credentials', () => {
        let userText = strategy.getLargeString();
        let passText = strategy.getLargeString();
        let loginPage = new LoginPage(userText, passText);
        loginPage.doFailLogIn();
    });

});
