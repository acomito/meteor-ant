
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { baseSchema } from '../base-schemas/base-schema';

export const News = new Mongo.Collection('News');

News.baseSchema = baseSchema;

News.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

News.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});




News.schema = new SimpleSchema({
  businessId: {
    type: String,
    optional: true,
  },
  advisorId: {
    type: String,
    optional: true,
  },
  eventId: {
    type: String,
    optional: true,
  },
  studentId: {
    type: String,
    optional: true,
  },
  resourceOrgId: {
    type: String,
    optional: true,
  },
  resourceItemId: {
    type: String,
    optional: true,
  },
  image: {
    type: String,
    optional: true,
  },
  tags: {
    type: [String],
    optional: true,
  },
  stage: {
    type: [String],
    optional: true,
  },
  help: {
    type: [String], // help needed
    optional: true,
  },
  title: {
    type: String,
    optional: true,
  },
  newsType: {
    type: String,
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



News.attachSchema(News.schema);
News.attachSchema(News.baseSchema);
