import express from "express";
import bodyParser from "body-parser";
import recipeJSON from "./recipe.js";
const app = express();
const port = 3001;

let data;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/recipe", (req, res) => {
  switch (req.body.choice) {
    case 'chicken':  
      data = recipeJSON[0];
      break;
    case 'beef':
      data = recipeJSON[1];
      break;
    case 'fish':
      data = recipeJSON[2];
      break;
    default:
      break;
  }
  
  res.render("index.ejs",{recipe:data});
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
