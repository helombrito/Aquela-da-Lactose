process.env.hashKey = 'heloisa';
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', __dirname + '/public');
app.use(express.static(__dirname + "/public"));

//? GETTING ROUTES
const screenRoute = require('./src/routes/ScreensRoutes');
const userRoute = require('./src/routes/UserRoute');
const commentRoute = require('./src/routes/CommentRoute');

app.use('/', screenRoute);
app.use('/user', userRoute);
app.use('/postagem', commentRoute);

app.listen(PORT, () =>
  console.log(`Seu servidor esta rodando no URL: http://localhost:${PORT}/`)
);
