const mongoose = require("mongoose");
async function dbConnection(){
    let url = `mongodb+srv://akash:akash123@cluster0.epuw6z9.mongodb.net/MERNECOM?retryWrites=true&w=majority`;
// let options = {
//   user: "akash",
//   pass: "akash123",
// }
await mongoose.connect(url).then(()=>{
  console.log("DB Connected");
}).catch((e)=>{
  console.log(e);
})
}
module.exports = dbConnection;