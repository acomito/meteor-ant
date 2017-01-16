
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { baseSchema } from '../base-schemas/base-schema';

export const Organizations = new Mongo.Collection('Organizations');

Organizations.baseSchema = baseSchema;

Organizations.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Organizations.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});


Organizations.schema = new SimpleSchema({
  location: {
    type: String,
    optional: true,
  },
  website: {
    type: String,
    optional: true,
  },
  orgType: {
    type: String,
    optional: true, // finance, general-user, events, etc.
  },
  stages: {
    type: [String],
    optional: true, // finance, general-user, events, etc.
  },
/*  tags: {
    type: [String],
    optional: true, // finance, general-user, events, etc.
  },*/
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



Organizations.attachSchema(Organizations.schema);
Organizations.attachSchema(Organizations.baseSchema);
