// Server used for starting running applications

const express = require('express');
const cors = require('cors');
const app = require('/self_learn18/flutter_backend/node_modules/src/app.js');

const PORT = 3000;
app.listen(PORT, () =>{
    console.log("Server running on PORT : " + PORT);
});

