const { default: axios } = require("axios");

const mvController = exports;

const clientID = process.env.MEDIAVALET_CLIENT_ID
const clientSecret = process.env.MEDIAVALET_CLIENT_SECRET

mvController.mvLogin = async(req, res) => {
    try {
        const code = req.query.code;
        const body = new URLSearchParams({
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': 'http://localhost:3000',
            'client_id': clientID,
            'client_secret': clientSecret
        })
        axios.post(`https://login.mediavalet.com/connect/token`, body)
        .then((resp) => {
            return res.status(200).send(resp.data);
        })
        
    } catch(err) {
        return res.status(500).send({})
    } 
}

mvController.refreshToken = async(req, res) => {
    try {
        const token = req.query.refreshToken;
        const body = new URLSearchParams( {
            'grant_type': 'refresh_token',
            'refresh_token': token,
            'client_id': clientID,
            'client_secret': clientSecret
        });
        axios.post(`https://login.mediavalet.com/connect/token`, body)
        .then((resp) => {
            return res.status(200).send(resp.data);
        })
    } catch(err) {
        return res.status(500).send({})
    } 
}