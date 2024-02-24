import { Injectable } from '@angular/core';
import {Food } from './food.model';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
 menu:Food[]=[
  {
    id:1,
    name:'pizza',
    description:'Peperoni',
    category: 'food',
    image:'https://images.milenio.com/0K6Z88QAoROoZrWK5LGsv0w0IqU=/942x532/uploads/media/2019/06/03/no-hay-quien-se-resista.jpg',
    price:250
  },
  {
    id:2,
    name:'pizza',
    description:'Peperoni',
    category: 'food',
    image:'https://images.milenio.com/0K6Z88QAoROoZrWK5LGsv0w0IqU=/942x532/uploads/media/2019/06/03/no-hay-quien-se-resista.jpg',
    price:250
  },
  {
    id:3,
    name:'pizza',
    description:'Peperoni',
    category: 'food',
    image:'https://images.milenio.com/0K6Z88QAoROoZrWK5LGsv0w0IqU=/942x532/uploads/media/2019/06/03/no-hay-quien-se-resista.jpg',
    price:250
  }
 ]
  constructor() { }
  public getAllFoods():Food[]{
    return this.menu;

  }
}