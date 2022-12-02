import takeScreenShot from "../utils/screenshots";
let config = require('../../config.json');

export class MemberPage{

    public memberUrl:string;
    public invitePeopleButton:string;
    public memberEmailAddressTextbox:string;
    public roleDropDownList:string;
    public sendInvitationButton:string;
    public invalidEmailMessage:string;
    public memberName:string;

    constructor(){
        this.memberUrl = config.siteHost+config.members.membersUrl;
        this.invitePeopleButton = config.members.invitePeopleButton;
        this.memberEmailAddressTextbox = config.members.memberEmailAddressTextbox;
        this.roleDropDownList = config.members.roleDropDownList;
        this.sendInvitationButton = config.members.sendInvitationButton;
        this.invalidEmailMessage = config.members.invalidEmailMessage;
        this.memberName = config.members.memberName;
    }

    inviteNewMember(memberName,memberEmail, memberRole){
        cy.visit(this.memberUrl)
            .then(()=>{
                takeScreenShot()
                cy.get(this.invitePeopleButton).click()
                .then(()=>{
                    takeScreenShot()
                    cy.get(this.memberName).type(memberName,{ parseSpecialCharSequences: false, force:true });
                    cy.get(this.memberEmailAddressTextbox).first().type(memberEmail, { parseSpecialCharSequences: false, force:true })
                    .then(()=>{
                        takeScreenShot()
                        cy.get(this.roleDropDownList).type(memberRole+"{enter}")
                        .then(()=>{
                            takeScreenShot()
                            cy.get(this.sendInvitationButton).click()
                            .then(()=>{
                                takeScreenShot()
                                cy.get(this.invalidEmailMessage).should('have.css','color','rgb(115, 131, 147)');
                            });
                        });
                    });
                });
            });
    }
}