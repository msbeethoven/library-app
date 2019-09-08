// import Controller from '@ember/controller';
// import {computed, observer} from '@ember/controller';

// export default Controller.extend({

//   isDisabled: true, 
//   emailAddress: '',
//   actualEmailAddress: computed('emailAddress', function() {
//     console.log('actualEmailAddress function is callled:' this.get('emailAddress'))
//   } )

// });

import { computed, observer } from '@ember/object';
import {empty, match, not} from '@ember/object/computed'
import Controller from '@ember/controller';

export default Controller.extend({

  headerMessage: 'Coming Soon',
  responseMessage: '',
  emailAddress: '',

  // isDisabled: empty('emailAddress'), 

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'), //empty until valid email

  // isDisabled: computed('emailAddress', function(){
  //   return this.get('emailAdddress') === '';
  // })

  // isDisabled: computed('emailAddress', function() {
  //   console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  // }), //tracks as well, but not disabled

  // isDisabled: observer('emailAddress', function() {
  //   console.log('observer is called', this.get('emailAddress'));
  // }) //changed every type, like in event.target

  actions: {

    saveInvitation(){
      const email = this.get('emailAddress');
      
      const newInvitation = this.store.createRecord('invitation', {
        email: email
      });

      newInvitation.save();
      alert(`Saving : ${this.get('emailAddress')}`);
      //console.log(`Saved : ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! Saved your address!: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
      
      

    }

  }

});

