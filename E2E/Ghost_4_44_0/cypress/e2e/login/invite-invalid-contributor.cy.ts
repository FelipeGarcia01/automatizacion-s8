import { MemberPage } from '../../PageObject/members-page';
import { StrategyFactory } from '../../support/strategy/strategy-factory';
import { IStrategy } from '../../support/strategy/i-strategy';
import { LoginPage } from '../../PageObject/login-page';

describe('Scenario2',()=>{

    let strategy: IStrategy;
    let logInPage = new LoginPage();

    before(async () =>{
      strategy = await StrategyFactory.getStrategy();
    })

    it ('Invite contributor with invalid email', () => {
        logInPage.doLogIn();
        let membersPage = new MemberPage();
        let memberEmail = strategy.getShortString();
        let memberRole = 'Contributor';
        membersPage.inviteNewMember(memberEmail, memberRole);

    });

});
