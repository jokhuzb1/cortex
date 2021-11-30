import { createSlice } from "@reduxjs/toolkit"

const amountSlice = createSlice({
    name: 'amount',
    initialState: {
        totalAmount: 0,
        taxYear: "",
        taxableAmount: 0,
        country: "",
    },
    reducers: {
        increment: (state, action) => {
            const { totalValue } = action.payload;
            state.totalAmount = totalValue;
        },
        setTaxYear: (state, action) => {
            const { year } = action.payload;
            state.taxYear = year;
        },
        changeTaxableAmount: (state, action) => {
            const { taxableAmount } = action.payload;
            state.taxableAmount = taxableAmount;
        },
        changeCountry: (state, action) => {
            const { country } = action.payload;
            state.country = country;
        },

    }
});


export const { increment, setTaxYear, changeTaxableAmount, changeCountry } = amountSlice.actions;
export default amountSlice.reducer;