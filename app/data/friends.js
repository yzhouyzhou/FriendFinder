// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
  {
    name: "Ding Ding",
    photo: "http://www.petsworld.in/blog/wp-content/uploads/2014/09/cat.jpg",
    score: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
  {
    name: "Zing Zing",
    photo: "http://www.petsworld.in/blog/wp-content/uploads/2014/09/adorable-cat.jpg",
    score: [5, 5, 5, 5, 5, 5, 5, 3, 5, 5]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
