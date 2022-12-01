import takeScreenShot from '../utils/screenshots.ts';

let config = require('../../config.json');

export class PostPage {
    navigate() {
        cy.visit(config.siteHost+'ghost/#/posts')
          
    }
    navigateIndex() {
        cy.visit(config.siteHost)
          
    }

    elements = {

        selectUser : () => cy.xpath("//div[text()='demouser']"),
        createBtn :() => cy.xpath("//a[@title= 'New post']"), 
        namePostField :() => cy.xpath("//textarea[@class= 'gh-editor-title ember-text-area gh-input ember-view']"),
        selectPublish :() => cy.xpath("//span[normalize-space()='Publish']"),
        descriptionPostField : () => cy.xpath("//div[@data-kg='editor']"),
        publishBtn :() => cy.xpath("//button[@class='gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view']//span[contains(text(),'Publish')]"),  
        confirmPublishBtn :() => cy.xpath("//button[@class='gh-btn gh-btn-black gh-btn-icon ember-view']//span[contains(text(),'Publish')]"),                                             
        selectUpdate :() => cy.xpath("//span[normalize-space()='Update']"),
        updateBtn :() => cy.xpath("//button[@class='gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view']//span[contains(text(),'Update')]"),
        closeWindowPublish : () => cy.xpath("//button[@class= 'gh-btn gh-btn-outline gh-btn-link']"),
        findValuePostPublish: () => cy.xpath("//div[@class='post-card-excerpt']//p"),
        selectSetting: () => cy.xpath("//button[@title='Settings']"),
        listTag: () => cy.xpath("//input[@class='ember-power-select-trigger-multiple-input']"),
        selectTag: (name) => cy.xpath('(//div[@class="form-group"]//li[normalize-space()="'+name+'"])'),
        listarFilterTag: () => cy.xpath("//div[contains(@class,'gh-contentfilter-menu gh-contentfilter-tag')]//div[contains(@role,'button')]"),
        selectFilterTag: (name) => cy.xpath('//li[normalize-space()="'+name+'"]'),
        closePostSettings: () => cy.xpath("//span[@class='settings-menu-open']"),
        findPostInFilter: () => cy.xpath("//h3[@class='gh-content-entry-title']"),
        }
        

        createPost(){
            this.elements.createBtn().click();
            takeScreenShot();
        }

        enterNamePost(text) {
            this.elements.namePostField().clear().type(text);
            takeScreenShot();
            return this
        }

        enterDescriptionPost(text) {
            this.elements.descriptionPostField().clear().type(text);
            takeScreenShot();
            return this
        }

        selectPublish() {
            this.elements.selectPublish().click( {force: true});
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
        findPostInFilter(texto){
            this.elements.findPostInFilter().first().contains(texto);
            takeScreenShot();        
        }
        closePostSettings(){
            
            this.elements.closePostSettings().click({force: true});
            takeScreenShot(); 
            return this 
        }

        listFilterTags(){
            this.elements.listarFilterTag().eq(0).click();
            takeScreenShot();
            return this            
        }
        selectFilterTag(text) {
            this.elements.selectFilterTag(text).eq(0).click();
            takeScreenShot(); 
            return this
        }

        closeWindowPublish(){
            //this.elements.closeWindowPublish().click();
            //takeScreenShot();
            //return this
        }

        waitForPublish(){
            //cy.xpath("//button[2]/span").should('have.text',"Update");
            //takeScreenShot();
            //return this
        }

        isModifyPost(text){                        
            this.elements.findValuePostPublish().each(($el,index) => {
                if($el.text() == text) {                                                           
                    expect($el.text()).to.eq(text);                    
                }else{
                    expect($el.text()).to.not.eq(text);
                }
                
            })
            takeScreenShot();
            return this;
        }
}
export default PostPage