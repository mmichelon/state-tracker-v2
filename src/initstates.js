export function initStatesFun (id, db) {
  //Create entry in database for user
  // doc.data() will be undefined in this case
  console.log("No such document! Creating new entry in database");
  // Insert new record for person that doesn't already exist
  db.collection("users").doc(id).collection("states").doc("found").set({
    1 : 0,
    2 : 0,
    3 : 0,
    4 : 0,
    5 : 0,
    6 : 0,
    7 : 0,
    8 : 0,
    9 : 0,
    10 : 0,
    11 : 0,
    12 : 0,
    13 : 0,
    14 : 0,
    15 : 0,
    16 : 0,
    17 : 0,
    18 : 0,
    19 : 0,
    20 : 0,
    21 : 0,
    22 : 0,
    23 : 0,
    24 : 0,
    25 : 0,
    26 : 0,
    27 : 0,
    28 : 0,
    29 : 0,
    30 : 0,
    31 : 0,
    32 : 0,
    33 : 0,
    34 : 0,
    35 : 0,
    36 : 0,
    37 : 0,
    38 : 0,
    39 : 0,
    40 : 0,
    41 : 0,
    42 : 0,
    43 : 0,
    44 : 0,
    45 : 0,
    46 : 0,
    47 : 0,
    48 : 0,
    49 : 0,
    50 : 0
    // Alabama : 0,
    // Alaska : 0,
    // Arizona : 0,
    // Arkansas : 0,
    // California : 0,
    // Colorado : 0,
    // Connecticut : 0,
    // Delaware : 0,
    // Florida : 0,
    // Georgia : 0,
    // Hawaii : 0,
    // Idaho : 0,
    // Illinois : 0,
    // Indiana : 0,
    // Iowa : 0,
    // Kansas : 0,
    // Kentucky : 0,
    // Louisiana : 0,
    // Maine : 0,
    // Massachusetts : 0,
    // Maryland : 0,
    // Minnesota : 0,
    // Michigan : 0,
    // Missouri : 0,
    // Mississippi : 0,
    // Montana : 0,
    // Nebraska : 0,
    // Nevada : 0,
    // New_Hampshire : 0,
    // New_Jersey : 0,
    // New_Mexico : 0,
    // New_York : 0,
    // North_Carolina : 0,
    // North_Dakota : 0,
    // Ohio : 0,
    // Oklahoma : 0,
    // Oregon : 0,
    // Pennsylvania : 0,
    // Rhode_Island : 0,
    // South_Carolina : 0,
    // South_Dakota : 0,
    // Tennessee : 0,
    // Texas : 0,
    // Utah : 0,
    // Vermont : 0,
    // Virginia : 0,
    // Washington : 0,
    // West_Virginia : 0,
    // Wisconsin : 0,
    // Wyoming : 0
  })
  .then((docRef) => {
      console.log("Document written with ID: ", id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
};


export function getStates(id, db){
  console.log("In Get States")
  //Displays the docs in location
  // db.collection("users").doc(id).collection("states").get().then((querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //       console.log(`${doc.id} => ${doc.data()}`);
  //   });
  // });

  //Displays the information inside the doc
  var docRef = db.collection("users").doc(id).collection("states").doc("found");
  docRef.get().then((doc) => {
      if (doc.exists) {
          console.log("Document data:", doc.data());
      } else {
          // doc.data() will be undefined in this case
          console.log("getStates: No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
}

export function initStatesHighestLevel (id, db) {
  //Create entry in database for user
  // doc.data() will be undefined in this case
  console.log("No such document! Creating new entry in database");
  // Insert new record for person that doesn't already exist
  db.collection("states")
  .doc("states")
  .set({
    1 : "Alabama",
    2 : "Alaska",
    3 : "Arizona",
    4 : "Arkansas",
    5 : "California",
    6 : "Colorado",
    7 : "Connecticut",
    8 : "Delaware",
    9 : "Florida",
    10 : "Georgia",
    11 : "Hawaii",
    12 : "Idaho",
    13 : "Illinois",
    14 : "Indiana",
    15 : "Iowa",
    16 : "Kansas",
    17 : "Kentucky",
    18 : "Louisiana",
    19 : "Maine",
    20 : "Massachusetts",
    21 : "Maryland",
    22 : "Minnesota",
    23 : "Michigan",
    24 : "Missouri",
    25 : "Mississippi",
    26 : "Montana",
    27 : "Nebraska",
    28 : "Nevada",
    29 : "New Hampshire",
    30 : "New Jersey",
    31 : "New Mexico",
    32 : "New York",
    33 : "North Carolina",
    34 : "North Dakota",
    35 : "Ohio",
    36 : "Oklahoma",
    37 : "Oregon",
    38 : "Pennsylvania",
    39 : "Rhode Island",
    40 : "South Carolina",
    41 : "South Dakota",
    42 : "Tennessee",
    43 : "Texas",
    44 : "Utah",
    45 : "Vermont",
    46 : "Virginia",
    47 : "Washington",
    48 : "West Virginia",
    49 : "Wisconsin",
    50 : "Wyoming"
  })
  .then((docRef) => {
      console.log("Document written with ID: ", id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
};
