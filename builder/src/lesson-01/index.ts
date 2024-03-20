import { RestaurantMenuBuilder } from './restaurant-menu-builder'

const builder = new RestaurantMenuBuilder()

const menu1 = builder
  .buildMainCourse('Salada Caesar', 10.99)
  .buildStarter('Bruschetta', 8.50)
  .buildDessert('Bolo de Chocolate', 10.50)
  .buildDessert('Bolo de Morango', 10.50)
  .getRestaurantMenu()

const menu2 = builder
  .buildMainCourse('Salmão Grelhado', 15.99)
  .buildStarter('Sopa de Cebola', 7.50)
  .buildDessert('Cheesecake de Framboesa', 12.50)
  .getRestaurantMenu()

console.log(menu1)
console.log(menu2)