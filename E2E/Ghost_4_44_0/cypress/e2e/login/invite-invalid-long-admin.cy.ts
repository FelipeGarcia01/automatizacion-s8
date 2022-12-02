import { MemberPage } from '../../PageObject/members-page';
import { StrategyFactory } from '../../support/strategy/strategy-factory';
import { IStrategy } from '../../support/strategy/i-strategy';
import { LoginPage } from '../../PageObject/login-page';

describe('Scenario3',()=>{

    let strategy: IStrategy;
    let logInPage = new LoginPage();
    before(async () =>{
      strategy = await StrategyFactory.getStrategy();
    })

    it ('Invite admin with long invalid email', () => {
        
        logInPage.doLogIn();

        let membersPage = new MemberPage();
        let memberEmail = strategy.getLargeString();
        let memberName = strategy.getShortString();
        
        let memberRole = 'Administrator';
        membersPage.inviteNewMember(memberName,memberEmail, memberRole);

    });


});
