/*****************************************************************************/
/* EditContact: Event Handlers */
/*****************************************************************************/
Template.EditContact.events({
});

/*****************************************************************************/
/* EditContact: Helpers */
/*****************************************************************************/
Template.EditContact.helpers({
    beforeRemove: function () {
        return function (collection, id) {
            var doc = collection.findOne(id);
            if (confirm('Really delete contact: "' + doc.Name + " " + '"?')) {
                this.remove();
                Router.go('contactList');
            }
        };
    }
});

/*****************************************************************************/
/* EditContact: Lifecycle Hooks */
/*****************************************************************************/
Template.EditContact.onCreated(function () {
});

Template.EditContact.onRendered(function () {
});

Template.EditContact.onDestroyed(function () {
});
