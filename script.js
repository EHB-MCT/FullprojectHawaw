const dialogflow = require('@google-cloud/dialogflow').v2beta1;
const uuid = require('uuid'); 
const pjid = require("../talkingfenrir-lprg-4c6027af1b17.json")

async function Run(){


const sessionClient = new dialogflow.SessionsClient();
const sessionId = uuid.v4();
const sessionPath = sessionClient.projectAgentSessionPath(pjid.project_id,sessionId);
console.log(sessionPath);


const request = {
        session: sessionPath,
        queryInput: {
          text: {
            
            text: 'tell me about compute engine',
            
            languageCode: 'en-US',
          },
        },
      };




        const responses =  await sessionClient.detectIntent(request);
        console.log('Detected intent');
        const result = responses[0].queryResult;
        console.log(`  Query: ${result.queryText}`);
        console.log(`  Response: ${result.fulfillmentText}`);
        if (result.intent) {
          console.log(`  Intent: ${result.intent.displayName}`);
        } else {
          console.log(`  No intent matched.`);
        }

    }
    Run();




// console.log("app started!");
// const uuid = require('uuid'); 
//  const pjid = require("./talkingfenrir-lprg-4c6027af1b17.json");
// /**
//  * Send a query to the dialogflow agent, and return the query result.
//  * @param {string} projectId The project to be used
//  */
// async function runSample(projectId = pjid.project_id) {
//   // A unique identifier for the given session
//   const sessionId = uuid.v4();
 
//   // Create a new session
//   const sessionClient = new dialogflow.sessionClient();
//   const sessionPath = sessionClient.sessionPath(projectId, sessionId);
 
//   // The text query request.
//   const request = {
//     session: sessionPath,
//     queryInput: {
//       text: {
//         // The query to send to the dialogflow agent
//         text: 'hello',
//         // The language used by the client (en-US)
//         languageCode: 'en-US',
//       },
//     },
//   };
 
//   // Send request and log result
//   const responses = await sessionClient.detectIntent(request);
//   console.log('Detected intent');
//   const result = responses[0].queryResult;
//   console.log(`  Query: ${result.queryText}`);
//   console.log(`  Response: ${result.fulfillmentText}`);
//   if (result.intent) {
//     console.log(`  Intent: ${result.intent.displayName}`);
//   } else {
//     console.log(`  No intent matched.`);
//   }
// }
// runSample();