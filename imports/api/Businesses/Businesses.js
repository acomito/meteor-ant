import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { baseSchema, servicesSchema } from '../base-schemas/base-schema';

export const Businesses = new Mongo.Collection('Businesses');

Businesses.baseSchema = baseSchema;

Businesses.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Businesses.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});



/*Businesses.detailsSchema = new SimpleSchema({
  website: {
    type: String,
    optional: true,
  },
  facebook: {
    type: String,
    optional: true,
  },
  twitter: {
    type: String,
    optional: true
  },
  instagram: {
    type: String,
    optional: true
  },
  youtube: {
    type: String,
    optional: true
  },
  linkedin: {
    type: String,
    optional: true
  },
  phone: {
    type: String,
    optional: true
  },
  email: {
    type: String,
    optional: true
  },
});*/


Businesses.schema = new SimpleSchema({
  title: {
    type: String,
    optional: true,
  },
  description: {
    type: String,
    optional: true,
  },
  clusters: {
    type: [String],
    optional: true
  },
  stage: {
    type: String,
    optional: true
  },
  tags: {
     type: [String],
    optional: true
  },
  advisors: {
     type: [String],
    optional: true
  },
  help: {
    type: [String],
    optional: true
  }
/*  details: {
    type: Businesses.detailsSchema,
    optional: true
  }*/
});



Businesses.attachSchema(Businesses.schema);
Businesses.attachSchema(Businesses.baseSchema);
//Businesses.attachSchema(Businesses.servicesSchema);

