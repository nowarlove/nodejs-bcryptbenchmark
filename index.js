// import modul yang sudah di installkan
const bcrypt = require('bcrypt');

// Salt rounds adalah jumlah kali proses enkripsi dilakukan, dan semakin tinggi nilainya, semakin sulit pula password tersebut di-decrypt.
const saltRounds = 8;

//mendefinisikan password yang akan dienkripsi menggunakan bcrypt.
const myPlaintextPassword = 'Mystr0ngP@SSW0RD';

// definisi variable yang akan di gunakan
var hashAsync;
var hashSync;

console.time('bcrypt_Async Generate Hash');

// penerapan program logic >> hashing async
bcrypt.hash(myPlaintextPassword, saltRounds).then(function (hash) {
    hashAsync = hash;
    console.timeEnd('bcrypt_Async Generate Hash');
    console.time('bcrypt_Async Compare Hash');

    // string akan di compare
    bcrypt.compare(myPlaintextPassword, hashAsync).then(function (result) {
        console.timeEnd('bcrypt_Async Compare Hash');
    });
});

console.time('bcrypt_Sync Generate Hash');

// programing logic secara sinkronus
hashSync = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.timeEnd('bcrypt_Sync Generate Hash')
console.time('bcrypt_Sync Compare Hash');

// hasil hash akan langsung bandingkan
bcrypt.compareSync(myPlaintextPassword, hashSync);
console.timeEnd('bcrypt_Sync Compare Hash');