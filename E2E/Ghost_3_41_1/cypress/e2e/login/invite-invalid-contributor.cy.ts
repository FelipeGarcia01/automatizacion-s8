import { LoginPage } from '../../PageObject/login-page-d.js';
import { MemberPage } from '../../PageObject/members-page.js';
import { StrategyFactory } from '../../support/strategy/strategy-factory';
let config = require('../../../config.json');
import { IStrategy } from '../../support/strategy/i-strategy';

describe('Scenario2',()=>{

    let strategy: IStrategy;
  
    before(async () =>{
      strategy = await StrategyFactory.getStrategy();
    })

    it ('Invite contributor with invalid email', () => {
        let userText = config.logIn.userName;
        let passText = config.logIn.userPass;
        let loginPage = new LoginPage(userText, passText);
        loginPage.doLogIn();

        let membersPage = new MemberPage();
        let memberEmail = strategy.getShortString();
        let memberRole = 'Contributor';
        membersPage.inviteNewMember(memberEmail, memberRole);

    });

});
