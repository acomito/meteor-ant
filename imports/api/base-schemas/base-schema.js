//top-level
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
//enums




// BASE SCHEMA
// ---------------------------------------------

export const baseSchema = new SimpleSchema({
  title: {
    type: String,
    optional: true,
  },
  description: {
    type: String,
    optional: true,
  },
  tags: {
    type: [String],
    optional: true,
  },
  special: {
    type: String,
    optional: true,
  },
  clusters: {
    type: [String],
    optional: true, // finance, general-user, events, etc.
  },
  serviceTypes: {
    type: [String], // businessPlanning, financialManagement, funding, legalAssistance, etc.
    optional: true
  },
  parentModelType: {
    type: String,
    optional: true,
  },
  parentId: {
    type: String,
    optional: true,
  },
  deleted: {
  	type: Boolean,
  	autoValue: function() {
        if (this.isInsert && (!this.isSet || this.value.length === 0)) {  // only set on insert
            return false
        }
    }
  },
  ownerId: {
    type: String,
    autoValue: function() {
        if (this.isInsert && (!this.isSet || this.value.length === 0)) {  // only set on insert
           return Meteor.userId();   
        }
    }
   },
  createdAt: {
    type: Date,
    autoValue: function() {
      // only set on insert
        if (this.isInsert && (!this.isSet || this.value.length === 0)) {
            return new Date()
        }
    }
  },
  updatedAt: {
    type: Date,
    // returns a new date on any update-- e.g. the last updated date
    autoValue: function() {
            return new Date()
    }
  },
});