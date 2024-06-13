import { DefinitionFieldWithDash } from "./DefinitionFieldWithDash";

 /**
 * @description What if a object has a field named items?\nThe case is an object like { items: [] }, which is legal
*/
export type AnObjectWithAnItemsField = {
    /**
     * @type array
    */
    items: DefinitionFieldWithDash[];
};