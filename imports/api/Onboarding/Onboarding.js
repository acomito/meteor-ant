
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { baseSchema } from '../base-schemas/base-schema';

export const Onboarding = new Mongo.Collection('Onboarding');

Onboarding.baseSchema = baseSchema;

Onboarding.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Onboarding.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

// properties are named by userType_areaNotificationWillShowUpOn_infoDisplayedInNotificaiton
// so student_nav_home is a notification for students that will show up on the nav area and will talk about the home tab


Onboarding.schema = new SimpleSchema({
  student_nav_home: {
    type: Boolean,
    autoValue: function() {
      // only set on insert
        if (this.isInsert && (!this.isSet || this.value.length === 0)) {
            return false
        }
    }
  },
  student_nav_news: {
    type: Boolean,
    autoValue: function() {
      // only set on insert
        if (this.isInsert && (!this.isSet || this.value.length === 0)) {
            return false
        }
    }
  },
  student_perks: {
    type: Boolean,
    autoValue: function() {
      // only set on insert
        if (this.isInsert && (!this.isSet || this.value.length === 0)) {
            return false
        }
    }
  },
  student_events: {
    type: Boolean,
    autoValue: function() {
      // only set on insert
        if (this.isInsert && (!this.isSet || this.value.length === 0)) {
            return false
        }
    }
  },
  student_organizations: {
    type: Boolean,
    autoValue: function() {
      // only set on insert
        if (this.isInsert && (!this.isSet || this.value.length === 0)) {
            return false
        }
    }
  },
  student_advisors: {
    type: Boolean,
    autoValue: function() {
      // only set on insert
        if (this.isInsert && (!this.isSet || this.value.length === 0)) {
            return false
        }
    }
  },
  // ------------------------------------
  // ADVISOR ONBOARDING
  // ------------------------------------
  advisor_nav_home: {
    type: Boolean,
    autoValue: function() {
      // only set on insert
        if (this.isInsert && (!this.isSet || this.value.length === 0)) {
            return false
        }
    }
  },
  advisor_nav_news: {
    type: Boolean,
    autoValue: function() {
      // only set on insert
        if (this.isInsert && (!this.isSet || this.value.length === 0)) {
            return false
        }
    }
  },
  schemaVersion: {
    type: Number,
    autoValue: function() {
      // only set on insert
        if (this.isInsert && (!this.isSet || this.value.length === 0)) {
            return 0
        }
    }
  },
});



Onboarding.attachSchema(Onboarding.schema);
Onboarding.attachSchema(Onboarding.baseSchema);
