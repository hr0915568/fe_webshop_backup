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
    return {heroes};
  }

  createDb1() {
    const products = [
  {
    "id": 1,
    "name": "Tire1",
    "parent_id" : 1
  },
  {
    "id": 2,
    "name": "Tire2",
    "parent_id" : 1
  }
    ];
    return {products};
  }  
}
