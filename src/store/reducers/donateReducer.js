const initState = {
  donor: [
    { id: "1", bloodgroup: "o-", city: "vellore", contact: "7458965896" },
  ],
};

const donateReducer = (state = initState, action) => {
  switch (action.type) {
    case "MAKE_DONATION":
      return state;
    case "MAKE_DONATION_ERROR":
      return state;
    default:
      return state;
  }
};

export default donateReducer;
