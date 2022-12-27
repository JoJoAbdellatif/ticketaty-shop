const corsHeaders = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://ticketaty-shop.vercel.app"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}

module.exports = {corsHeaders}