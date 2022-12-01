import takeScreenShot from "../utils/screenshots"

export class PostPage {
    constructor () {
        this.buttonDialogSchedules = "//span[@class='gh-notification-title']"
        this.post = "//h3[normalize-space()='"

        this.h3ThereIsNoPost = "//span[normalize-space()='Write a new post']"

        this.spanDraft = "//span[@class='gh-content-status-draft gh-badge gh-badge-pink nowrap']"
    }

    validateSchedulePost = (postTitle) => {
        cy.xpath(this.buttonDialogSchedules).contains("Scheduled")
        cy.contains(postTitle)
        takeScreenShot();
    }

    validateDeletePost = () => {
        cy.xpath(this.h3ThereIsNoPost)
        takeScreenShot();
    }

    validateDraftPost = () => {
        cy.xpath(this.spanDraft)
        takeScreenShot();
    }

    enterPost = (titlePost) => {
        cy.xpath(this.post + titlePost + "']").click()
        takeScreenShot();
    }
}

export default new PostPage();
