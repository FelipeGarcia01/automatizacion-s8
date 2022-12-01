import { IStrategy } from "./i-strategy";
const planBdatapool = require("./datapoolonline.json");
export class DataPoolOnlineStrategy implements IStrategy{
    datapoolonline: any = "";

    getShortString():string {
        return this.datapoolonline.getShortString;
    }
    getLargeString():string {
        return this.datapoolonline.getLargeString;
    }
    getUserName():string {
        return this.datapoolonline.getUserName;
    }
    getUserPassword():string{
        return this.datapoolonline.getUserPassword;
    }
    getEmail():string  {
        return this.datapoolonline.getEmail;
    }
    getNumber():number {
        return this.datapoolonline.getNumber;
    }
    getTagName():string {
        return this.datapoolonline.getTagName;
    }
    getNaughtyString():string {
        return this.datapoolonline.getNaughtyString;
    }

    private getConvertedData(): Promise<any> {
        let status:boolean = false;
        return fetch('https://my.api.mockaroo.com/datapoolonline.json?key=85cd6210', {
            method: 'GET',
        }).then((response) => {  
            status = response.ok;       
            return response.json()
        }).then((response) => {                 
            if(status)                
                this.datapoolonline = response;
            else
                this.datapoolonline = planBdatapool[0];
            return response;            
        });
    }

    public async loadData(){
        await this.getConvertedData();
    }
}
