/* CLOUDPAD BACKEND */

const connectToMongo = require(`${__dirname}/db`);
const express = require('express');
const cors = require('cors');

connectToMongo();
const app = express();
const port = 5000;

// const corsOptions = {
//     origin: 'http://localhost:5000',
//     optionsSuccessStatus: 200, // For legacy browser support
//   };
//   app.options('*', (req, res) => {
//     res.header('Access-Control-Allow-Origin', 'https://client-seven-silk-25.vercel.app');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.sendStatus(200);
// });

  
  app.use(cors());
  app.use(express.json());

// AVAIABLE ROUTES
app.use('/api/auth', require('./routes/authRouter'));
app.use('/api/notes', require('./routes/notesRouter'));

app.listen(port, ()=> {
    console.log(`server listening at http://localhost:${port}`);
});

app.get('/', (req, res)=>{
    res.send("Hello World!");
})