export function setIncome(incomeLevel) {
  return {
    type: "SET_INCOME",
    payload: { 
      income: "50" 
    }
  }
};

export function setGender(genderValue) {
  return {
    type: "SET_GENDER",
    payload: { 
      gender: `${genderValue}` 
    }
  }
};
