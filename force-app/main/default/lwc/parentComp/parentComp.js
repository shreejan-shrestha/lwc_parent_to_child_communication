import { LightningElement, track } from 'lwc';

export default class ParentComp extends LightningElement {

    @track finalVal = "Second Value";

    handleChange(){
        this.finalVal = "Third Value";
    }

    handleCall(){

        var childCompSelector = this.template.querySelector('c-child-comp');
        var sendParam = {firstVal : 'Ok?'}
        childCompSelector.testChildMethod(sendParam);

    }

}