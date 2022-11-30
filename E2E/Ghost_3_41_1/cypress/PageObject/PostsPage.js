export class PostPage {
    constructor () {
        this.buttonDialogSchedules = "//span[@class='gh-notification-title']"
        this.post = "//h3[normalize-space()='"

        this.h3ThereIsNoPost = "//span[normalize-space()='Write a new post']"

        this.spanDraft = "//span[@class='gh-content-status-draft gh-badge gh-badge-purple nowrap']"
    }

    validateSchedulePost = (postTitle) => {
        cy.xpath(this.buttonDialogSchedules).contains("Scheduled")
        cy.contains(postTitle)
    }

    validateDeletePost = () => {
        cy.xpath(this.h3ThereIsNoPost)
    }

    validateDraftPost = () => {
        cy.xpath(this.spanDraft)
    }

    enterPost = (titlePost) => {
        cy.xpath(this.post + titlePost + "']").click()
    }
}

export default new PostPage();
