import { input } from "../widgets/input.js";
import { formSubmit } from "../../events/formSubmit.js";

const formSearch = function(){
    const form = document.createElement('form')
    form.classList.add("my-4")
    form.append(
        input('text', 'Name or Number'),
        input('submit', 'Search', ['mx-5'])
    );
    form.addEventListener('submit', formSubmit); 
    return form;
}

export {formSearch};