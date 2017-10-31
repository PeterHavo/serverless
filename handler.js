

'use strict';

const DynamoDbService = require("./services/dynamoDb_service")
console.log(DynamoDbService)
const faker = require("faker")

module.exports.fetch = (event, context, callback) => {
  
  const TABLE_NAME = 'blo';
  const NUM_OF_ITEM = 10000;
  let dynamoDbDataService = new DynamoDbService(TABLE_NAME, NUM_OF_ITEM);
  
  
  dynamoDbDataService.getAll().then((results) => {
     const response = {
         statusCode: 200,
          body: JSON.stringify({results})
  };  
    
    callback(null, response);
    
  })
  .catch((err) => {
    callback(err)
  })
 
  
  
}
  
  
//   somedata().then((generatedData) => {
//     const response = {
//     statusCode: 200,
//     body: JSON.stringify({generatedData}),
//   };
   
//   return response;
//   }).then(response => callback(null, response))
//     .catch((err) => {
//       if (err)
//       console.log(err.message)
//     });
  
  
 
  
  

//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
// };


// const somedata = () => {
//   return new Promise((resolve, reject) => {
    
//     let GeneratedfakerData = [];
    
//     for (let i = 0 ; i < 10; i ++) {
//       var randomName = faker.name.findName(); // Rowan Nikolaus
//       var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
//       var randomCard = faker.helpers.createCard()
      
//       GeneratedfakerData.push({randomName, randomEmail, randomCard})
      
//     }
    
//     resolve(GeneratedfakerData)
//   })
  
// }



