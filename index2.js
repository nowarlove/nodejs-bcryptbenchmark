// import modul yang telah di installkan
var bcryptjs = require("bcryptjs");

// unique sald character
const saltRounds = 8;

// definisikan password
const myPlaintextPassword = "Mystr0ngP@SSW0RD";

// variable used
var hashAsync;
var hashSync;

console.time("bcryptjs_Async Generate Hash");

// same like bcrypt its line using for programming logic
bcryptjs.hash(myPlaintextPassword, saltRounds).then(function (hash) {
  hashAsync = hash;
  console.timeEnd("bcryptjs_Async Generate Hash");
  console.time("bcryptjs_Async Compare Hash");

  // password akan coba di compare pada bagian ini
  bcryptjs.compare(myPlaintextPassword, hashAsync).then(function (result) {
    console.timeEnd("bcryptjs_Async Compare Hash");
  });
});

console.time("bcryptjs_Sync Generate Hash");

// programming logic using asinkronus
hashSync = bcryptjs.hashSync(myPlaintextPassword, saltRounds);
console.timeEnd("bcryptjs_Sync Generate Hash");
console.time("bcryptjs_Sync Compare Hash");

// hash akan di compare pada bagian ini
bcryptjs.compareSync(myPlaintextPassword, hashSync);
console.timeEnd("bcryptjs_Sync Compare Hash");
