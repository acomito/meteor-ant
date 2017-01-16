
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { baseSchema } from '../base-schemas/base-schema';

export const Perks = new Mongo.Collection('Perks');

Perks.baseSchema = baseSchema;

Perks.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Perks.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});


Perks.schema = new SimpleSchema({
  organizationId: {
    type: String,
    optional: true,
  },
  organizationTitle: {
    type: String,
    optional: true,
  },
  contentLink: { //provide the url to link to, for instance if somebody added a business, then this will help link to the business profile
    type: String,
    optional: true,
  },
  code: {
    type: String,
    optional: true,
  },
  title: {
    type: String,
    optional: true,
  },
  image: {
    type: String,
    optional: true,
  },
  description: {
    type: String,
    optional: true,
  },
  perkType: {
    type: String,
    optional: true, // coupon code, maybe perk genre (finance, etc?)
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



Perks.attachSchema(Perks.schema);
Perks.attachSchema(Perks.baseSchema);