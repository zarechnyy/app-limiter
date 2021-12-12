const rateLimit = require("express-rate-limit");
const express = require('express');

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5
});

const app = express();

// only apply to requests that begin with /api
app.use("/api", apiLimiter);

function between(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

app.get('/api/random', (req, res) => {
    res.status(200).send(between(10, 200).toString());
});

app.listen(3001, () => {
    console.log('listening on port 3001');
});
