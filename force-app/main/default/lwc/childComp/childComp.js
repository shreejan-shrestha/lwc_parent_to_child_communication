import { LightningElement, wire, api, track } from 'lwc';

export default class ChildComp extends LightningElement {

    @api initialVal = "First Value";

    @api testChildMethod(parentParam){

        alert('This is a child method ' + parentParam.firstVal);

    }

}