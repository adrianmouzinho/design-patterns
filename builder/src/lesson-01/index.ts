import { RestaurantMenuBuilder } from "./restaurant-menu-builder";

const builder = new RestaurantMenuBuilder()

const menu = builder
                .buildMainCourse('Salada Caesar', 10.99)
                .buildStarter('Bruschetta', 8.50)
                .buildDessert('Bolo de Chocolate', 10.50)
                .buildDessert('Bolo de Morango', 10.50)
                .getRestaurantMenu()

console.log(menu?.starters())