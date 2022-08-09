require('dotenv').config()

const express = require('express')
  , bodyParser = require('body-parser')
  , cors = require('cors')
  , surveyController = require('./lib/controllers/surveyController.js')
  , mvController = require('./lib/controllers/mvController')
  , auditController = require('./lib/controllers/auditController')
  , trapsController = require('./lib/controllers/trapsController')

// Setup server port
const port = process.env.PORT || 4000;

const app = express()
  .use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
  .use(cors())
  .use(bodyParser.json({limit: '50mb'}))

  .post('/survey123', surveyController.createSurvey)

  .post('/mvLogin', mvController.mvLogin)
  .post('/mvRefresh', mvController.refreshToken)

  .get('/audits', auditController.getAllAudits)
  .post('/audits', auditController.createAudit)
  .get('/audits/:id', auditController.getAudit)

  .get('/traps', trapsController.getActiveTraps)

// start server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});