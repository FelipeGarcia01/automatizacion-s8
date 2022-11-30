let stepCount = 0;

export default function takeScreenShot(){
    cy.wait(2000);
    //cy.screenshot("before-step-"+stepCount,{overwrite:true});
    //stepCount += 1;
}