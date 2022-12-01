export interface IStrategy{
    getShortString:() => string;
    getLargeString:() => string;
    getUserName:() => string;
    getUserPassword:() => string;
    getEmail:() => string;
    getNumber:() => number;
    getTagName:() => string;
    getNaughtyString:() => string;
}
