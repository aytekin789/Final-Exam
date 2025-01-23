const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String
});

const Product = product.model("Product", productSchema);

app.get("/", async(req, res) => {
 const data = await Product.find();
  res.send(data);
});

app.get('/:id', async(req, res) => {
    const {id} = req.params
    const data = await Product.findById(id)
  res.send(data)
})


app.post('/', async(req, res) => {
    const data = await Product.create(req.body)
  res.send(data)
})


app.put('/:id', async(req, res) => {
   const { id } = req.params;
   const data = await Product.findByIdAndUpdate(id, req.body); 
  res.send(data)
})


app.delete('/:id', async(req, res) => {
    const { id } = req.params;
    const data = await Product.findByIdAndDelete(id); 
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
    mongoose.connect(
      "mongodb+srv://aytakinymbp109:#7ki8myA9@@bp-109.q2j8u.mongodb.net/")
    .then(()=>console.log("DB connected"))
    .catch((err)=>console.log(err))
  console.log(`Example app listening on port ${port}`);
});
