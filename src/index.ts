import cors from 'cors';
import express from 'express';
const app = express();
const port = process.env.PORT;

// Enable CORS for any origin and for all routes
// for specific add the url: 'http://localhost:3000'
const corsOptions = {
    origin: '*'
};
app.use(cors(corsOptions));

/**
 * Simple PINGU /ping route
 */
app.get('/ping', (_, res) => {
  res.send('pong!');
});

/**
 * Start PINGU on port.
 */
app.listen(port, () => {
  return console.log(`PINGU is listening at http://localhost:${port}`);
});