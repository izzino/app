/*****************************************************************************/
/* ListContacts: Event Handlers */
/*****************************************************************************/
Template.ListContacts.events({
});

/*****************************************************************************/
/* ListContacts: Helpers */
/*****************************************************************************/
Template.ListContacts.helpers({
    contacts: function() {
        return Contacts.find();
    }
});

/*****************************************************************************/
/* ListContacts: Lifecycle Hooks */
/*****************************************************************************/
Template.ListContacts.onCreated(function () {
});

Template.ListContacts.onRendered(function () {
});

Template.ListContacts.onDestroyed(function () {
});
