const express = require('express');
const router = express.Router();
const messagesLogic = require('../logic/messagesLogic');


router.get('/', async (request, response, next) => {

    try {
        const allEmails = await messagesLogic.getAllUserEmails(request);
        response.json(allEmails);
    }
    catch (error) {
        return next(error);
    }
});

router.post('/', async (request, response, next) => {

    const message = request.body;
    
    try {
        console.log(message);
        const succesfullMessageIDresponse = await messagesLogic.saveMessage(request, message);
        response.json(succesfullMessageIDresponse);
    }
    catch (error) {
        return next(error);
    }
});


module.exports = router;