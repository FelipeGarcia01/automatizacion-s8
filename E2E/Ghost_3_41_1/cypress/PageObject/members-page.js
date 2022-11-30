let config = require('../../config.json');

export class MemberPage{

    constructor(){
        this.memberUrl = config.siteHost+config.members.membersUrl;
        this.invitePeopleButton = config.members.invitePeopleButton;
        this.memberEmailAddressTextbox = config.members.memberEmailAddressTextbox;
        this.roleDropDownList = config.members.roleDropDownList;
        this.sendInvitationButton = config.members.sendInvitationButton;
        this.invalidEmailMessage = config.members.invalidEmailMessage;
    }

    inviteNewMember(memberEmail, memberRole){
        cy.visit(this.memberUrl)
            .then(()=>{
                cy.get(this.invitePeopleButton).click()
                .then(()=>{
                    cy.get(this.memberEmailAddressTextbox).first().type(memberEmail, { parseSpecialCharSequences: false })
                    .then(()=>{
                        cy.get(this.roleDropDownList).select(memberRole)
                        .then(()=>{
                            cy.get(this.sendInvitationButton).click()
                            .then(()=>{
                                cy.get(this.invalidEmailMessage).should('be.visible');
                            });
                        });
                    });
                });
            });
    }
}