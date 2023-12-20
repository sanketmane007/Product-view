import { LightningElement,track,wire,api } from 'lwc';
export default class ChildProduct extends LightningElement {
 @api productList;
    handleNavSelection(event) {
        event.preventDefault();
        const selectEvent = new CustomEvent('selection', {
            detail: event.target.name
        });
        
        this.dispatchEvent(selectEvent);
    }
}