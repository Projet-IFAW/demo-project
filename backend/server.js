const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// en local mongodb://localhost:27017/tests
//Recuperation des données depuis la BD MongoDB cloud
mongoose.connect('mongodb+srv://myuser:myuser@cluster0.tryid.mongodb.net/tests?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

const MovieSchema = new mongoose.Schema({
    id: Number,
    title:  String , 
    plot: String,
    img: String,
    date: String,
    price: Number,
    inCart: Boolean,
    count: Number,
    total: Number,
})
const MovieModel = mongoose.model('movies',MovieSchema);

db.once('open', function() {
    console.log("Connexion à la BD");

});

db.on('error', console.error.bind(console, 'erreur de connexion:'));


// Verifie que cela fonctionne
router.get("/", (req, res) => {
  res.json({ message: "API en route"});
});

app.use('/api', router);


router.route("/movies").get(function(req, res) {
   MovieModel.find((error, movies)=>{
       if(error) return res.send(error);
       res.json(movies);
   }).skip(Number(req.query.offset)).limit(12)
});

//Ecoute en localhost
const PORT = 8081;

app.listen(PORT,  () => {
  console.log(`Serveur en route sur le port:  ${PORT}.`);
});