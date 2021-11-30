export default function calculate(amount) {
    if (amount > 0 && amount < 18200) {
        return 0;
    } else if (amount >= 18201 && amount <= 45000) {
        let taxable = amount - 18201;
        taxable = taxable * 0.19;
        return taxable;
    } else if (amount >= 45000 && amount <= 120000) {
        let taxable = amount - 45000;
        taxable = taxable * 0.325 + 5092;
        return taxable;
    } else if (amount >= 120000 && amount <= 180000) {
        let taxable = amount - 120000;
        taxable = taxable * 0.37 + 29467;
        return taxable;
    } else if (amount >= 180000) {
        let taxable = amount - 180000;
        taxable = taxable * 0.47 + 51667;
        return taxable;
    }
}

let test = calculate(200000);
console.log(test);
