import { IStrategy } from "./i-strategy";
const { faker } = require('@faker-js/faker');

export class OnlineStrategy implements IStrategy{
    shortString: string;
    longString: string;

    constructor(){
        this.shortString = faker.datatype.string();
        this.longString = faker.datatype.string(100);
    }

    getShortString():string {
        return faker.datatype.string(5);
    }

    getLargeString():string {
        return faker.datatype.string(100);
    }
    getUserName():string {
        return faker.datatype.string(10);
    }
    getUserPassword():string {
        return faker.datatype.string(10);
    }
    getEmail():string {
        return faker.datatype.string(10);
    }
    getNumber():number {
        return faker.datatype.number();
    }
    getTagName():string {
        return faker.datatype.string(10);
    }
    getNaughtyString():string {
        return faker.datatype.string(10);
    }
    
}