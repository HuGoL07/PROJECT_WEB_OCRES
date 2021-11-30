var express = require('express');
var axios = require('axios');
const { uniqueId } = require('lodash');
var router = express.Router();
const _ = require('lodash');


/* PUT - CREATE*/
router.put('/', (req, res) => {
    //Get the data from request tor request
    const { movie } = req.body;
    getMovieInfos(movie).then((movie) => {
        //Create new unique id
        const id = _.uniqueId();

        //Insert it in array
        movies.push({ movie, id });
        //Return message
        res.json({
            message: `Just added ${id}`,
            movie: { movie, id }
        });
    });

});