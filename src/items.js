import {builder} from "./menu_item";
import pretzel_img from "./pexels-yana-nadolinska.jpg";


const pretzel = builder(document, pretzel_img, "A basket full of warm pretzels", "6.50 €").menu_item_element;
export { pretzel };
