import { Currency, BalanceHistory, TradePair, User } from "./interfaces";


export default class BalanceService {
    numberOfUsers: number;
    currencies: Currency[];
    tradePairs: TradePair[];
    history: BalanceHistory[];
    users: User[]

    constructor(numberOfUsers: number, currencies: Currency[], tradePairs: TradePair[]){
        this.numberOfUsers = numberOfUsers;
        this.currencies = currencies;
        this.tradePairs = tradePairs;
        this.history = [];
    }

    init(){

    }

    getUserBalance(userId: string, currencyId: string){
        const user = this.users.filter(k=>k.userId === userId)[0];
        if(!user){
            throw new Error(`User hasn't been found`);
        }
        const balance = user.balances.filter(k=>k.currency.id === currencyId)[0];
        return balance ? balance.balance : 0;
    }

    setUserBalance(userId: string, currencyId: string, amount: number){
        const user = this.users.filter(k=>k.userId === userId)[0];
        if(!user){
            throw new Error(`User hasn't been found`);
        }
        const balance = user.balances.filter(k=>k.currency.id === currencyId)[0];
        if(balance){
            balance.balance = amount;
        }
        else{
            user.balances.push({currency, balance: amount})
        }
    }
}