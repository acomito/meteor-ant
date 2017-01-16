
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { baseSchema } from '../base-schemas/base-schema';

export const Events = new Mongo.Collection('Events');

Events.baseSchema = baseSchema;

Events.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Events.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});


Events.schema = new SimpleSchema({
  title: {
    type: String,
    optional: true,
  },
  description: {
    type: String,
    optional: true,
  },
  location: {
    type: String,
    optional: true,
  },
  stage: {
    type: [String],
    optional: true,
  },
  clusters: {
    type: [String],
    optional: true,
  },
  tags: {
    type: [String],
    optional: true,
  },
  time: {
    type: String,
    optional: true,
  },
  date: {
    type: Date,
    optional: true,
  },
  usersAttending: {
    type: [String],
    optional: true
  },
  numberAttending: {
    type: Number,
    autoValue: function() {
      // only set on insert
        if (this.isInsert && (!this.isSet || this.value.length === 0)) {
            return 0
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



Events.attachSchema(Events.schema);
Events.attachSchema(Events.baseSchema);