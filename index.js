require('dotenv').config()
const { Server } = require("socket.io");
const fileUpload = require('express-fileupload');

const express = require('express')
  , bodyParser = require('body-parser')
  , cors = require('cors')
  , surveyController = require('./lib/controllers/surveyController.js')
  , mvController = require('./lib/controllers/mvController')
  , auditController = require('./lib/controllers/auditController')
  , trapsController = require('./lib/controllers/trapsController')
  , mailController = require('./lib/controllers/mailController')
  , commentsController = require('./lib/controllers/commentsController')
  , envelopeController = require('./lib/controllers/envelopeController')

// Setup server port
const port = process.env.PORT || 4000;
const http = require('http');


const app = express()
  .use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
  .use(cors())
  .use(bodyParser.json({limit: '50mb'}))
  .use(function(req, res, next){
    res.io = io;
    next();
  })

  .post('/survey123', surveyController.createSurvey)

  .post('/mvLogin', mvController.mvLogin)
  .post('/mvRefresh', mvController.refreshToken)

  .get('/audits', auditController.getAllAudits)
  .post('/audits', auditController.createAudit)
  .get('/audits/:id', auditController.getAudit)
  .get('/versions/:id', auditController.getVersionsByAudit)

  .get('/traps', trapsController.getActiveTraps)

  .get('/users', auditController.getUsers)
  .post('/users', auditController.createUser)
  .get('/user/:id', auditController.getUser)

  .post('/review/send', mailController.sendReviewMail)

  .post('/comments', commentsController.createComment)
  .get('/comments', commentsController.getCommentByAudit)

  .post('/trap/images', auditController.setTrapImages)
  .get('/trap/images', auditController.getTrapImages)

  .post('/sendEnvelope', fileUpload(), envelopeController.sendEnvelope)

  .patch('/audits/version/:id', auditController.updateVersion)


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});




const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('response', {message: 'hello'}); 
});

server.listen(3080, () => {
  console.log('listening on *:3000');
});

app.get('/notification', (req, res) => {
  res.io.emit('response', {title: 'August Audit', message: 'John Doe has signed the final agreement'})
  res.send({})
})