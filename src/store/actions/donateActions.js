export const makeDonation = (donor) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    console.log(profile);
    firestore
      .collection("donor")
      .add({
        ...donor,
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: "gg@gmail.com",
      })
      .then(() => {
        dispatch({ type: "MAKE_DONATION", donor: donor });
      })
      .catch((err) => {
        dispatch({ type: "MAKE_DONATION_ERROR", err });
      });
  };
};
