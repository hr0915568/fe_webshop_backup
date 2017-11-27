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
    "name": "BRAM"
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
    "name": "Wheels"
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
}
