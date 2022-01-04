const linkData = require('../model/linkData');

exports.createL = (req, res) => {
    if (
		!req.body._id ||
		!req.body.linkUrl ||
		!req.body.linkText
        ) {
			console.log(req.body)
			return res.status(400).send({ message: 'Required fields must not be empty.' });
        }

        const newlinkData = new linkData( {
            _id: req.body._id,
            linkUrl: req.body.linkUrl,
            linkText: req.body.linkText
        });

        newlinkData.save()
        .then(data => {
            return res.status(201).send({data: data});
        })
        .catch(err => {
            res.status(500).send({message: err.message || "an unexpected error has occured"});
        });
    }

    exports.findByIdL = (req, res) => {
        linkData.findById(req.params.id)
        .then( (linkData) => {
            console.log(req.params.id)
            if (!linkData) {
                return res.status(404).send({message: `A post with ${req.params.id} was not found`
            });
            } res.status(200).send(linkData);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "an unknown error has occured"
            });
        });
    };

    exports.findL = (req, res) => {
        linkData.find({})
        .then( (linkData) => {
            res.status(201).send(linkData);
        })
        .catch( (err) => {
            res.status(500).send( {message: err.message || "unknown error"});
        });
    }

    exports.deleteL = (req, res) => {
        linkData.findByIdAndRemove(req.params.id)
        .then( (linkData) => {
            if(!linkData) {
                return res.status(404).send({message: `There is no web data with the id: ${req.params.id}`});
            } return res.status(204).send();
        })
        .catch( (err) => {
            return res.status(500).send( {message: `Failed to delete ${req.params.id}`});
        });
    };

    exports.updateL = (req, res) => {
        if(
        !req.body._id ||
		!req.body.linkUrl ||
		!req.body.linkText 
        )
        {
            console.log(req.body);
            return res.status(400).send({message: 'There can be no empty fields.'});
        };
        linkData.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then( (linkData) => {
            if (!linkData) {
                return res.status(404).send({
                    message: `A post with id: ${req.params.id} was not found`
                });
            } return res.status(204).send({linkData: linkData})
        })
        .catch( (err) => {
            return res.status(500).send({message: `Data for id ${req.params.id} could not be updated` });
        });
    }