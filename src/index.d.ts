// import required libraries
import moment = require("moment")

// define interfaces
interface drawdownArray { 
    [index:number]:string 
};



export class loans {
    /**
     * main
     */
    
    public main(date1, date2, drawdownArray ) {
        //define date variables        
        let date  = moment().format('d-MMM-YYYY');
        let midnight = moment().startOf('day').format();
        let now = moment().format();
        // On first drawdown date
        if ( date == startDate) {
            drawdownAmount()
            lendingFee()
            otherFees()
            //Every day on midnight
        } else if (now == midnight) {
            // on second or third drawdown date
            for (let ddate of drawdownDate){
                if(ddate == date){
                    drawdownAmount()
                }
                
            }
            // for every other midnight
            loanOneBalance()
            loanTwoBalance()
            nonUtilizationInterest()

            //on repayment date
        } else if( date == repaymentDate){
            minimumInterest()
            exitFees()
            TotalInterestCharged = totalInterestCharged + balancingInterestDue
            TotalInterestDue = totalInterestDue 
            BalanceOfLoanOutstanding = balanceOfLoanOne + balanceOfLoanTwo
            TotalRedemptionAmount = BalanceOfLoanOutstanding + totalInterestDue + TotalFeesDue

        }
    } 
    if () {
            
        }

    }
}
 
// check on drawdown dates
export function drawdownAmount(){
		if (loanType == 1){
            drawdownOneAmount = drawdownOneAmount + balanceOfLoanOne
			undrawnBalance = undrawnBalance - drawdownOneAmount

        } else if (loanType == 2){
            drawdownOneAmount = drawdownOneAmount + balanceOfLoanTwo
			undrawnBalance = undrawnBalance - drawdownOneAmount

        }
			

}
// calculate lending fees on first drawdown date
export function lendingFee(){
    if (interestServiced == "yes"){
        lendingFees = totalLoan * (lendingFeePercentage/100)
    } else if (interestServiced == "no"){
        lendingFees = (totalLoan * loanInterestRate/100) * (lendingFeePercentage/100)
        if (lendingFeeAddedToLoan == "yes"){
            feeDue = feeDue + lendingFees
            feePaid = feePaid + lendingFees
            balanceOfLoanOne = balanceOfLoanOne + lendingFees
        } else if (lendingFeeAddedToLoan == "no"){
            feeCharged = feeCharged + lendingFees
            feeDue = feeDue + lendingFees
            feePaid = feePaid + lendingFees
            feeOutstanding = feeOutstanding + lendingFees
        }
    }

}

//calculate other fees on first drawdown date
export function otherFees(){
	if (OtherFeesAddedToLoan == "yes"){
        feeDue = feeDue + otherFeesPayable
        feePaid = feePaid + otherFeesPayable
        balanceOfLoanOne = balanceOfLoanOne + otherFeesPayable
    } else if(OtherFeesAddedToLoan == "no"){
        feeDue = feeDue + otherFeesPayable
        feePaid = feePaid + otherFeesPayable
        feeOutstanding = feeOutstanding + otherFeesPayable
        feeCharged = feeCharged + otherFeesPayable

    }
}
// calculate loan type one balance
export function loanOneBalance(){
    
        dailyOneInterest = balanceOfLoanOne * dailyRateOfLoanOne
        
		if (loanOneInterestServiced == "yes"){
            totalInterestCharged = totalInterestCharged + dailyOneInterest
            totalInterestDue = totalInterestDue + dailyOneInterest
            totalInterestPaid = totalInterestPaid + dailyOneInterest
            totalInterestOutstanding = totalInterestOutstanding + dailyOneInterest
        } else if (loanOneInterestServiced == "no"){
            if (loanOneInterestComponded == "yes"){
                totalInterestCharged = totalInterestCharged + dailyOneInterest
                totalInterestDue = totalInterestDue + dailyOneInterest
                totalInterestPaid = totalInterestPaid + dailyOneInterest
                balanceOfLoanOne = balanceOfLoanOne + dailyOneInterest
            } else if (loanOneInterestComponded == "no"){
                totalInterestCharged = totalInterestCharged + dailyOneInterest
                totalInterestNotDue = totalInterestNotDue + dailyOneInterest
                totalInterestOutstanding = totalInterestOutstanding + dailyOneInterest

            }
        }
}

// calculate loan type two balance
export function loanTwoBalance(){
    dailyTwoInterest = balanceOfLoanTwo * dailyRateOfLoanTwo
        
		if (loanTwoInterestServiced == "yes"){
            totalInterestCharged = totalInterestCharged + dailyTwoInterest
            totalInterestDue = totalInterestDue + dailyTwoInterest
            totalInterestPaid = totalInterestPaid + dailyTwoInterest
            totalInterestOutstanding = totalInterestOutstanding + dailyTwoInterest
        } else if (loanTwoInterestServiced == "no"){
            if (loanTwoInterestCompounded == "yes"){
                totalInterestCharged = totalInterestCharged + dailyTwoInterest
                totalInterestDue = totalInterestDue + dailyTwoInterest
                totalInterestPaid = totalInterestPaid + dailyTwoInterest
                balanceOfLoanTwo = balanceOfLoanTwo + dailyTwoInterest
            } else if (loanTwoInterestCompounded == "no"){
                totalInterestCharged = totalInterestCharged + dailyTwoInterest
                totalInterestNotDue = totalInterestNotDue + dailyTwoInterest
                totalInterestOutstanding = totalInterestOutstanding + dailyTwoInterest

            }
        }
}

//calculate non utilization interest
export function nonUtilizationInterest(){
    dailyNonUtilizationInterest = undrawnBalance * dailyNonUtilizationRate
    if (nonUtilizationInterestServiced == "yes"){
        totalInterestCharged = totalInterestCharged + dailyNonUtilizationInterest
        totalInterestDue = totalInterestDue + dailyNonUtilizationInterest
        totalInterestPaid = totalInterestPaid + dailyNonUtilizationInterest
        totalInterestOutstanding = totalInterestOutstanding + dailyNonUtilizationInterest
    } else if (nonUtilizationInterestServiced == "no"){
        if (nonUtilizationInterestCompounded == "yes"){
            totalInterestCharged = totalInterestCharged + dailyNonUtilizationInterest
            totalInterestDue = totalInterestDue + dailyNonUtilizationInterest
            totalInterestPaid = totalInterestPaid + dailyNonUtilizationInterest
            balanceOfLoanOne = balanceOfLoanTwo + dailyNonUtilizationInterest
        } else if (nonUtilizationInterestCompounded == "no"){
            totalInterestCharged = totalInterestCharged + dailyNonUtilizationInterest
            totalInterestNotDue = totalInterestNotDue + dailyNonUtilizationInterest
            totalInterestOutstanding = totalInterestOutstanding + dailyNonUtilizationInterest

        }
    }
}

//check whether minimum interest is met
export function minimumInterest(){
    if(totalInterestCharged != minimumInterestAmount){
        balancingInterestCharged = minimumInterestAmount - totalInterestCharged
        balancingInterestDue = minimumInterestAmount - totalInterestCharged
        balancingInterestOutstanding = minimumInterestAmount - totalInterestCharged

    }

}
// check for exit fees
export function exitFees(){
    if (exitFeeAmount != 0){
        feeDue = feeDue + exitFeeAmount
    } 
    if (exitFeeGDV !=0){
        exitFeeAmount = (exitFeeGDV/100)* GDV
        feeDue = feeDue + exitFeeAmount
        feeOutstanding = feeOutstanding + exitFeeAmount
    }
    if (exitFeeLoan!=0){
        exitFeeAmount = (totalLoan + totalInterestCharged) * (exitFeeLoan/100)
        feeCharged = feeCharged + exitFeeAmount
        feeDue = feeDue + exitFeeAmount
        feeOutstanding = feeOutstanding + exitFeeAmount

    }

}

// definitions and variables

// date variables and constants
const startDate: String 
const repaymentDate: String
let drawdownDate: any 

// loan type one variables
let dailyOneInterest: number
let dailyRateOfLoanOne: number
let balanceOfLoanOne: number
let loanOneInterestServiced: String
let loanOneInterestComponded: String

//loan type two variables
let dailyTwoInterest: number
let dailyRateOfLoanTwo: number
let balanceOfLoanTwo: number
let loanTwoInterestServiced: String
let loanTwoInterestCompounded: String

//non utilization rate variables
let nonUtilizationInterestAmount : number
let dailyNonUtilizationInterest: number
let dailyNonUtilizationRate: number
let nonUtilizationInterestServiced : String
let nonUtilizationInterestCompounded: String

//interest variables
let interestServiced : String
let loanInterestRate: number
let minimumInterestAmount: number

let totalInterestDue: number
let totalInterestPaid: number
let totalInterestCharged: number
let totalInterestNotDue: number
let totalInterestOutstanding: number
let totalInterest: number

let balancingInterestCharged: number
let balancingInterestDue: number
let balancingInterestOutstanding: number

//fees variables
let lendingFees: number
let lendingFeePercentage: number
let lendingFeeAddedToLoan : String

let otherFeesPayable: number
let OtherFeesAddedToLoan : String

let feeCharged: number
let feeDue: number
let feePaid: number
let feeOutstanding: number

//exit fee variables
let exitFeeAmount: number
let exitFeeGDV: number
let exitFeeLoan: number

// general loan variables

let totalLoan: number
let loanType : number
let drawdownOneAmount: number
let drawdownAmountTwo: number
let undrawnBalance: number
let GDV: number
let TotalInterestCharged: number
let TotalInterestDue: number
let TotalFeesDue: number
let BalanceOfLoanOutstanding: number
let TotalRedemptionAmount : number
