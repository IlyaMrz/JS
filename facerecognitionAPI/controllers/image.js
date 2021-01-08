const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: '6bee4a916b1543cc804dce90109e4169'
  });

const handleApiCall = (req, res) => {
    app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data =>{
        res.json(data);
    })
    .catch(err=> res.status(400).json('unable to work with API'))
}

const handlerImage = (req,res,db) => {
    const { id } = req.body;
    db('users').where('id','=',id)
    .increment('entries',1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0]);
    })
    .catch(err => res.status(400).json('unable to increase entries'))

}

module.exports = {
    handlerImage: handlerImage,
    handleApiCall
};