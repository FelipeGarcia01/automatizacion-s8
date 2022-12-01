import takeScreenShot from '../utils/screenshots';

let config = require('../../config.json');

export class PagePage {
    navigate() {        
        cy.visit(config.siteHost+'ghost/#/pages')
            
    }
    navigatePage(page) {
        cy.visit(config.siteHost+page)
        
    }
    elements = {
        createBtn :() => cy.xpath("//span[normalize-space()='New page']"), 
        namePageField :() => cy.xpath("//textarea[@class= 'gh-editor-title ember-text-area gh-input ember-view']"),
        descriptionPageField : () => cy.xpath("//div[@data-kg='editor']"),
        selectPublish :() => cy.xpath("//span[normalize-space()='Publish']"),
        publishBtn :() => cy.xpath("//button[@class='gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view']//span[contains(text(),'Publish')]"), 
        selectUpdate :() => cy.xpath("//span[normalize-space()='Update']"),
        updateBtn :() => cy.xpath("//button[@class='gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view']//span[contains(text(),'Update')]"), 
        confirmPublishBtn :() => cy.xpath("//button[@class='gh-btn gh-btn-black gh-btn-icon ember-view']//span[contains(text(),'Publish')]"),                                             
        closeWindowPublish : () => cy.xpath("//button[@class= 'gh-btn gh-btn-outline']"),
        findValuePostPublish: () => cy.xpath("//section[@class='post-card-excerpt']/p"),
        titlePagePublished: (title) => cy.xpath('//h1[normalize-space()="'+title+'"]'),
        descriptionPagePublished: (text) => cy.xpath('//p[normalize-space()="'+text+'"]'),
        selectSetting: () => cy.xpath("//button[@title='Settings']"),
        listTag: () => cy.xpath("//input[@class='ember-power-select-trigger-multiple-input']"),
        selectFilterTag: (name) => cy.xpath('//li[normalize-space()="'+name+'"]'),
        closePostSettings: () => cy.xpath("//button[@class='settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon']"),
        }

    createPage(){
        this.elements.createBtn().click();
        takeScreenShot();
    }
    enterNamePage(text){        
        this.elements.namePageField().clear().type(text);
        takeScreenShot();
        return this
    }
    enterDescriptionPage(text)
    {
        this.elements.descriptionPageField().clear().type(text);
        takeScreenShot();
        return this
    }
    selectPublish() {
        this.elements.selectPublish().click( {force: true});
        takeScreenShot();
        return this
    }

    selectUpdate() {
        this.elements.selectUpdate().click( {force: true});
        takeScreenShot();
        return this
    }

    uptadte() {
        this.elements.updateBtn().click({force: true});
        takeScreenShot();
        return this
    }

    publish() {
        this.elements.publishBtn().click({force: true});
        takeScreenShot();
        return this
    }

    confirmPublish() {
        this.elements.confirmPublishBtn().click({force: true});
        takeScreenShot(); 
        return this
    }

    waitForPublish(){
        cy.xpath("//button[2]/span",{ timeout: 10000 }).should('have.text',"Update");
        takeScreenShot();
        return this
    }

    closeWindowPublish(){
        this.elements.closeWindowPublish().click();
        takeScreenShot();
        return this
    }

    validateTitlePagePublished(text){                        
        this.elements.titlePagePublished(text,{ timeout: 10000 }).should('have.text',text);    
        takeScreenShot();
        return this;
    }
    validateDescriptionPagePublished(description){                                
        this.elements.descriptionPagePublished(description).should('have.text',description);        
        takeScreenShot();
        return this;
    }

    selectSetting(){
        this.elements.selectSetting().click();
        takeScreenShot();
        return this            
    }

    listTag(){
        this.elements.listTag().eq(0).click();
        takeScreenShot();
        return this            
    }

    selectTag(text){
        this.elements.selectFilterTag(text).eq(0).click();
        takeScreenShot();  
    }

    closePostSettings(){
            
        this.elements.closePostSettings().click({force: true});
        takeScreenShot();
        return this 
    }

}
export default PagePage