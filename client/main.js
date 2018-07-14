import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
// import { Notes } from '../.meteor/lib/collection';
import { Notes} from '../lib/collection.js';

Template.body.helpers({
  // notes : [
  //   {text : 'my note 1'},
  //   {text : 'my note 2'},
  //   {text : 'my note 3'},
  // ]
  notes(){
    return Notes.find({});
  }
})

Template.add.events({
  'submit .add-form' : function(){
    event.preventDefault();
    const target = event.target;
    const text = target.text.value;
    console.log(text);
    
    console.log(123);
    return false;
  }
})