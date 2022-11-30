import { LabsPage } from "../../PageObject/labs-page";
import { LoginPage } from "../../PageObject/login-page";


describe('Escenario borrar info total', async ()=>{
    let logInPage = new LoginPage();
    let labPage = new LabsPage();    
    beforeEach(() =>{
      logInPage.doLogIn();
    })


    it('clean data ', () =>{
        labPage.clearAdmin();
    });
  
  });