Contacts = new Mongo.Collection('contacts');

if (Meteor.isServer) {
  Contacts.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

}

Contacts.attachSchema(new SimpleSchema({
  Name: {
    type: String,
    label: "Name",
    max: 100
  },
  number: {
    type: String,
    label: "Number",
    max: 10
  },
  party: {
    type: Number,
    label: "Party Size",
    optional: false
  }
}));