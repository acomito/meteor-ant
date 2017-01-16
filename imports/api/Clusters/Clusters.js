
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { baseSchema } from '../base-schemas/base-schema';

export const Clusters = new Mongo.Collection('Clusters');

Clusters.baseSchema = baseSchema;

Clusters.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Clusters.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});



Clusters.schema = new SimpleSchema({
  title: {
    type: String,
    optional: true,
  },
  key: {
    type: String,
    optional: true
  },
  description: {
    type: String,
    optional: true,
  }
});



Clusters.attachSchema(Clusters.schema);
Clusters.attachSchema(Clusters.baseSchema);

