const Movie = require('./movies.model');

exports.createMovie = async (req, res) => {
    try {
        const movie = new Movie(req.body);
        const savedMovie = await movie.save();
        res.status(200).send({movie: savedMovie, message: "Movie created in database"});
    } catch (error) {
        res.status(500).send(error)
        console.log(error);
    }
};

exports.findMovie = async (req, res) => {
    try {
        const movie = req.params.title;
        const targetMovie = await Movie.findOne({title: movie});
        if (targetMovie !== null) {
        res.status(200).send({movie: targetMovie, message: "Movie found"})
    } else {
        res.status(500).send("Unsuccessful")
    };
    } catch (error) {
        res.status(500).send(error)
        console.log(error);
    }
};

exports.updateMovieDesc = async (req, res) => {
    try {
        const title= req.body.title; 
        const desc = req.body.desc;
        const changeDesc = await Movie.findOneAndUpdate({title: title}, {description: desc});
        if (changeDesc !== null) {
            res.status(200).send({movie: changeDesc, newDesc: desc, message: 'Description updated successfully'});
        } else {
            res.status(500).send('Update unsuccessful')
        };

    } catch (error) {
        res.status(500).send(error)
        console.log(error);
    }
};

exports.deleteMovie = async (req,res) => {
    try {
        const movie = req.params.title;
        const removeMovie = await Movie.findOneAndDelete({title: movie});
        if (removeMovie !== null) {
            res.status(200).send({movie : removeMovie , message: 'Movie deleted successfully'});
        } else {
            res.status(500).send('Delete unsuccessful')
        };
    } catch (error) {
        res.status(500).send(error)
    }
};