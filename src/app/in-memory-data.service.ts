import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
  {
    "id": 1,
    "name": "Lights"
  },
  {
    "id": 1,
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
        "name": "Light1",
        "parent_id" : 1
      },
      {
        "id": 2,
        "name": "BRAM",
        "parent_id" : 1
      },
      {
        "id": 3,
        "name": "Steering Wheels",
        "parent_id" : 2
      },
      {
        "id": 4,
        "name": "Tires",
        "parent_id" : 1
      },
      {
        "id" : 5,
        "name": "Wheels",
        "parent_id" : 1
      },
      {
        "id" : 6,
        "name": "Test",
        "parent_id" : 1
      },
      {
        "id" : 7,
        "name": "123Wheels",
        "parent_id" : 1
      }
        ];    
    return {heroes,products};
    // return {};
  }

  


  
}
