'use strict'
const AWS = require("aws-sdk");
const faker = require("faker");



module.exports = class DynamoDbService {
    constructor(tableName, numOfItems){
        this.tableName = tableName;
        this.numOfItems = numOfItems;
        const awsDefaultRegion = process.env.AWS_DEFAULT_REGION;
        let dynamoDBParams = {
            region: awsDefaultRegion
        };
        console.log('configure AWS region')
        AWS.config.update(dynamoDBParams)
    }   
    
    getAll () {
        
        return new Promise((resolve, reject) => {
            console.log('hit aws docClient')
            const docClient = AWS.DynamoDB.DocumentClient();
            const params = {
                TableName: this.tableName,
                Limit: this.numOfItems
            }
            
            docClient.scan(params, (err, data) => {
                if(err){
                    reject(err)
                }
                else {
                    resolve(data.item);
                }
            })
            
        })
        
        
//         return new Promise((resolve, reject) => {
    
//     let GeneratedfakerData = [];
    
//     for (let i = 0 ; i < 10; i ++) {
//       var randomName = faker.name.findName(); // Rowan Nikolaus
//       var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
//       var randomCard = faker.helpers.createCard()
      
//       GeneratedfakerData.push({randomName, randomEmail, randomCard})
      
//     }
    
//     resolve(GeneratedfakerData)
//   })
    }
    
    
}


