
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { baseSchema } from '../base-schemas/base-schema';

export const Messages = new Mongo.Collection('Messages');

Messages.baseSchema = baseSchema;

Messages.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Messages.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});


Messages.schema = new SimpleSchema({
  senderId: {
    type: String,
    optional: true,
  },
  recipientId: {
    type: String,
    optional: true,
  },
  messageValue: {
    type: String,
    optional: true,
  },
  messageThreadId: {
    type: String,
    optional: true,
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



Messages.attachSchema(Messages.schema);
Messages.attachSchema(Messages.baseSchema);