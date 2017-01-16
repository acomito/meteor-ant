
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { baseSchema } from '../base-schemas/base-schema';

export const ResourceItems = new Mongo.Collection('ResourceItems');

ResourceItems.baseSchema = baseSchema;

ResourceItems.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

ResourceItems.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});


ResourceItems.schema = new SimpleSchema({
  title: {
    type: String,
    optional: true,
  },
  description: {
    type: String,
    optional: true,
  },
  resourceType: {
    type: String,
    optional: true, // finance, general-user, events, etc.
  },
  resourceOrgId: {
    type: String,
    optional: true, // finance, general-user, events, etc.
  },
  stages: {
    type: [String],
    optional: true, // finance, general-user, events, etc.
  },
  tags: {
    type: [String],
    optional: true, // finance, general-user, events, etc.
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



ResourceItems.attachSchema(ResourceItems.schema);
ResourceItems.attachSchema(ResourceItems.baseSchema);
