

'use strict';

const faker = require("faker")

module.exports.fetch = (event, context, callback) => {
  
  somedata().then((generatedData) => {
     const response = {
     statusCode: 200,
     body: JSON.stringify({generatedData}),
   };
   
   return response;
  }).then(response => callback(null, response))
  
  
 
  
  

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};


const somedata = () => {
  return new Promise((resolve, reject) => {
    
    let GeneratedfakerData = [];
    
    for (let i = 0 ; i < 10; i ++) {
      var randomName = faker.name.findName(); // Rowan Nikolaus
      var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
      var randomCard = faker.helpers.createCard()
      
      GeneratedfakerData.push({randomName, randomEmail, randomCard})
      
    }
    
    resolve(GeneratedfakerData)
  })
  
}



