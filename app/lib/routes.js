Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});


Router.route('/contacts', {
    name: 'ContactList',
    controller: 'ContactsController',
    action: 'list',
    where: 'client'
});


Router.route('/contacts/:_id', {
    name: 'editContact',
    controller: 'ContactsController',
    action: 'edit',
    where: 'client'
});


Router.route('/create', {
    name: 'createContact',
    controller: 'ContactsController',
    action: 'create',
    where: 'client'
});