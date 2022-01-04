const webData = require('../model/webData');

exports.create = (req, res) => {
    if (
		!req.body._id ||
		!req.body.imageLocation ||
		!req.body.imageAltText ||
		!req.body.linkUrl ||
		!req.body.text 
        ) {
			console.log(req.body)
			return res.status(400).send({ message: 'Required fields must not be empty.' });
        }

        const newWebData = new webData( {
            _id: req.body._id,
            imageLocation: req.body.imageLocation,
            imageAltText: req.body.imageAltText,
            linkUrl: req.body.linkUrl,
            text: req.body.text
        });

        newWebData.save()
        .then(data => {
            return res.status(201).send({data: data});
        })
        .catch(err => {
            res.status(500).send({message: err.message || "an unexpected error has occured"});
        });
    }

    exports.findById = (req, res) => {
        webData.findById(req.params.id)
        .then( (webData) => {
            console.log(req.params.id)
            if (!webData) {
                return res.status(404).send({message: `A post with ${req.params.id} was not found`
            });
            } res.status(200).send(webData);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "an unknown error has occured"
            });
        });
    };

    exports.find = (req, res) => {
        webData.find({})
        .then( (webData) => {
            res.status(201).send(webData);
        })
        .catch( (err) => {
            res.status(500).send( {message: err.message || "unknown error"});
        });
    }

    exports.delete = (req, res) => {
        webData.findByIdAndRemove(req.params.id)
        .then( (webData) => {
            if(!webData) {
                return res.status(404).send({message: `There is no web data with the id: ${req.params.id}`});
            } return res.status(204).send();
        })
        .catch( (err) => {
            return res.status(500).send( {message: `Failed to delete ${req.params.id}`});
        });
    };

    exports.update = (req, res) => {
        if(
        !req.body._id ||
		!req.body.imageLocation ||
		!req.body.imageAltText ||
		!req.body.linkUrl ||
		!req.body.text 
        )
        {
            console.log(req.body);
            return res.status(400).send({message: 'There can be no empty fields.'});
        };
        webData.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then( (webData) => {
            if (!webData) {
                return res.status(404).send({
                    message: `A post with id: ${req.params.id} was not found`
                });
            } return res.status(204).send({webData: webData})
        })
        .catch( (err) => {
            return res.status(500).send({message: `Data for id ${req.params.id} could not be updated` });
        });
    }