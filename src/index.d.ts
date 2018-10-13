import moment = require("moment")
moment().format();
export class loans {
    /**
     * main
     */
    public main(date1, date2, drawdownArray ) {
        const startDate: String = date1
        const repaymentDate: String = date2
        let drawdownDate:any = drawdownArray
        let date  = moment().format('d-MMM-YYYY');
        let midnight = moment().startOf('day').format();
        let now = moment().format();
        if ( date == startDate) {
            // drawdownAmount()
            // lendingFee()
            // otherFees()
        } else if (now == midnight) {
            for (let ddate of drawdownDate){
                if(ddate == date){
                    //drawdownAmount()
                    let j = 1+5;
                }
                
            }
            //loanOneBalance()
            //loanTwoBalance()
            //nonUtilizationInterest()
        } else if( date == repaymentDate){
            //minimumInterest()
            //exitFees()
            //totalInterestCharged = 
            //totalInterestDue =
            //totalLoanBalance =
            //totalRedemptionAmount =

        }
    } 
    if (now = 2) {
            
        }

    }
}