import {builder} from "./menu_item";
import pretzel_img from "./pexels-yana-nadolinska.jpg";
import beer_img from "./pexels-engin-akyurt.jpg";
import peanut_img from "./pexels-pixabay.jpg";
import burger_img from "./pexels-valeria-boltneva.jpg";


const pretzel = builder(document, pretzel_img, "A basket full of warm pretzels", "6.50 €").menu_item_element();
const beer = builder(document, beer_img, "Beer fresh from the tap.", "3.50 €").menu_item_element();
const peanuts = builder(document, peanut_img, "Enjoy your drinks with a few snacks on the side", "3.50 €").menu_item_element();
const burger = builder(document, burger_img, "If you are looking for something more hearthy, our burgers are sure to satisfy.", "7.00 €").menu_item_element();
export { pretzel, beer, peanuts, burger };
