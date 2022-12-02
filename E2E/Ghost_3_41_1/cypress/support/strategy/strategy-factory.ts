import { DataPoolAprioriStrategy } from "./data-pool-apriori-strategy"
import { DataPoolOnlineStrategy } from "./data-pool-online-strategy"
import { DataPoolVRTStrategy } from "./data-pool-vrt-strategy"
import { IStrategy } from "./i-strategy"
import { OnlineStrategy } from "./online-strategy"
let config = require('../../tsconfig.json')

export class StrategyFactory {
    constructor(){}

    static async createObject(strategy: number): Promise<IStrategy>{
        switch (strategy) {
            case 1:
                return new DataPoolAprioriStrategy(config.testType)
            case 2:
                let dataPoolOnlineStrategy = new DataPoolOnlineStrategy()
                await dataPoolOnlineStrategy.loadData()
                return <IStrategy>dataPoolOnlineStrategy
            case 3:
                return new OnlineStrategy()
            case 4:
                return new DataPoolVRTStrategy()                
        }
    }

    static async getStrategy() {
        return await this.createObject(config.strategy);
    }
}
