import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
  {
    "id": 1,
    "name": "Lights"
  },
  {
    "id": 2,
    "name": "BRAM123"
  },
  {
    "id": 3,
    "name": "Steering Wheels"
  },
  {
    "id": 4,
    "name": "Tires"
  },
  {
    "id" : 5,
    "name": "Wheelsaaaaaaaaa"
  },
  {
    "id" : 6,
    "name": "Test"
  },
  {
    "id" : 7,
    "name": "123Wheels"
  }
    ];
    const products = [
      {
        "id": 1,
        "name": "TEST123",
        "categoryid" : 9
      },
      {
        "id": 2,
        "name": "BRAM",
        "categoryid" : 1
      },
      {
        "id": 3,
        "name": "Steering Wheels",
        "categoryid" : 3
      },
      {
        "id": 4,
        "name": "Tires",
        "categoryid" : 1
      },
      {
        "id" : 5,
        "name": "Wheels",
        "categoryid" : 1
      },
      {
        "id" : 6,
        "name": "Test",
        "categoryid" : 1
      },
      {
        "id" : 7,
        "name": "123Wheels",
        "categoryid" : 1
      }
        ];        
    return {heroes,products};
    // return {};
  }

  


  
}