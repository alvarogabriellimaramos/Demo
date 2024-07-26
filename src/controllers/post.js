const validator = require("validator");

const feedback = require('../services/models/feedback');

module.exports = class postControllers {
    static async FeedBack(request,response) {
        const {name,email,message} = request.body;
        if (!name || !email || !message) {
            return response.status(400).json({messagem: 'Preencha os campos corretamente por favor'});
        };
        if (name.length < 4 || !validator.isEmail(email)) {
            return response.status(400).json({messagem: 'Nome ou email invalídos'});
        };
        request.session.LimitFeedBack++
        if (request.session.LimitFeedBack > 3) {
            return response.status(200).json({messagem: 'Você Já atigiu o limite de feedbacks,tente novamente mais tarde.'});
        };
        await feedback.create({
            name,email,message
        });
        
        return response.status(200).json({messagem: 'FeedBack enviado com sucesso,agradecemos sua avaliação :D '});
    };
};