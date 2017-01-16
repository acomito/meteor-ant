
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { baseSchema } from '../base-schemas/base-schema';

export const MessageThreads = new Mongo.Collection('MessageThreads');

MessageThreads.baseSchema = baseSchema;

MessageThreads.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

MessageThreads.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});


MessageThreads.schema = new SimpleSchema({
  title: {
    type: String,
    optional: true,
  },
  participants: {
    type: [String],
    optional: true,
  },
  lastMessageAdded: {
    type: Date,
    autoValue: function() {
      // only set on insert
        if (this.isInsert && (!this.isSet || this.value.length === 0)) {
            return new Date()
        }
    }
  },
  numberOfMessages: {
    type: Number,
    autoValue: function() {
      // only set on insert
        if (this.isInsert && (!this.isSet || this.value.length === 0)) {
            return 1
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



MessageThreads.attachSchema(MessageThreads.schema);
MessageThreads.attachSchema(MessageThreads.baseSchema);
