const initState = {
  donor: [
    { id: "1", bloodgroup: "o-", city: "vellore", contact: "7458965896" },
  ],
};

const donateReducer = (state = initState, action) => {
  switch (action.type) {
    case "MAKE_DONATION":
      console.log("created donations", action.donor);
      return state;
    case "MAKE_DONATION_ERROR":
      console.log("make donate error", action.err);
      return state;
    default:
      return state;
  }
};

export default donateReducer;
