'use strict'

const faker = require("faker")

class DynamoDbService {
    constructor(tableName, numOfItems){
        this.tableName = tableName;
        this.numOfItems = numOfItems;
    }   
    
    getAll () {
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
}


module.exports = DynamoDbService