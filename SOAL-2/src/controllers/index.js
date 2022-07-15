const mongoose = require("mongoose");
const uri = 'mongodb+srv://yadiprime009:%40Yadiprime009@cluster0.zikks.mongodb.net/?retryWrites=true&w=majority';
// const client = new MongoClient(uri);
// const database = client.db('mgi_Yadi-Apriyadi');
// const users = database.collections('users');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);
}

const userSchema = new mongoose.Schema({
  nama: String,
  hobi: String,
  alamat: String,
  nomor_telp: Number
});

const User = mongoose.model('users', userSchema);

exports.getUsers = async () => {
  try {
    const newUser = new User({nama: 'Yadi Apriyadi', hobi: 'mancing', alamat: 'Jalan kemangi no 7', nomor_telp: 08124875});
    const test = await newUser.save();
  } catch (error) {
    console.log(error);
  }
}
