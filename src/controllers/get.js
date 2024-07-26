
module.exports = class GetControllers {
    static Home  (request,response) {
        request.session.LimitFeedBack = 0;
        return response.status(200).render('index',{
            title: "Universo da sinuca",
            css: [`https://orca-massive-mullet.ngrok-free.app/css/home.css`],
            js: [`https://orca-massive-mullet.ngrok-free.app/js/index.js`]
        });
    };
    static Sessions(request,response) {
        return response.json(request.session);
    };
};