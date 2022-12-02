let stepCount = 1;

export default function takeScreenShot(){
    cy.wait(1000);
    cy.screenshot("before-step-"+stepCount,{overwrite:true});
    stepCount += 1;
}