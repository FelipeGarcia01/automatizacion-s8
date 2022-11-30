let config = require('../../config.json')

export class LandingPage {
    constructor () {
        this.urlLanding = config.siteHost;
    }

    ValidatePost = (postTitle, postBody) => {
        cy.visit(this.urlLanding)
        cy.contains(postTitle)
        cy.contains(postBody)
    }

    ValidatePage = (pageTitle, pageBody, urlPage) => {
        cy.visit(this.urlLanding + urlPage)
        cy.contains(pageTitle)
        cy.contains(pageBody)
    }
}

export default new LandingPage();
