'use strict';

var models = function () {

  var model = require('modelizer');

  // imports
  var Attr = model.Attr;
  var Type = model.Attr.Types;
  var Ref = model.Ref;
  var ObjArray = model.ObjArray;
  var RefArray = model.RefArray;
  var Operation = model.Operation;

  
  // model definitions:
  
  var Licence = new model("Licences", {
    name : Attr(Type.string),
    fullName : Attr(Type.string),
    versions : [{
      name : Attr(Type.string),
      url : Attr(Type.string)
    }]
  });
  
  var BaseProduct = new model("BaseProducts", {
    name : Attr(Type.string),
    fullName : Attr(Type.string),
    
    versions : [{
      number : Attr(Type.string),
      licence : Ref(Licence),
      licence_version : Attr(Type.string)
    }]
  });
  
//  var UserModel = new model("users", {
//    email: Attr(Type.string, validators.email),  // email ist auch username
//    password: Attr(Type.string),
//    registrationdate: Attr(Type.date, Attr.default(new Date())),
//    lastlogindate: Attr(Type.date),
//
//    profile: {
//      firstName: Attr(Type.string),
//      lastName: Attr(Type.string),
//      company: Attr(Type.string),
//      address: Attr(Type.string),
//      city: Attr(Type.string),
//      zip: Attr(Type.string),
//      tel: Attr(Type.string),
//      fax: Attr(Type.string),
//      uid: Attr(Type.string),
//      country: Attr(Type.string),
//      contactperson: {
//        name: Attr(Type.string)
//      }
//
//    login: Operation(),
//    logout: Operation(),
//    register: Operation(),
//
//    userType: Attr(Type.string, Type.enum('user', 'admin', 'provider'), Attr.default('user')),
//
//    currentUser: Factory()
//  });

//  var EventModel = new model("events", {
//    start: Attr(Type.date),
//    quantity: Attr(Type.number)
//
//  });
//
//  var BookableItemModel = new model("bookableItems", {
//    description: {
//      en: Attr(Type.string),
//      de: Attr(Type.string),
//      it: Attr(Type.string)
//    },
//    price: Attr(Type.number),
//    duration: Attr(Type.number),
//
//    events: ObjArray(EventModel)
//  });
//
//  var ActivityModel = new model("activities", {
//    inputlanguage: Attr(Type.string, Type.enum('en', 'de', 'it', 'manual')),
//    name: {
//      en: Attr(Type.string),
//      de: Attr(Type.string),
//      it: Attr(Type.string)
//    },
//    company: Attr(Type.string),
//    address: Attr(Type.string),
//
//    description: {
//      en: Attr(Type.string),
//      de: Attr(Type.string),
//      it: Attr(Type.string)
//    },
//
//    images: [
//      {
//        public_id: Attr(Type.string),
//        format: Attr(Type.string),
//        name: Attr(Type.string),
//        url: Attr(Type.string)
//      }
//    ],
//
//    category: {
//      main: Attr(Type.string),
//      subs: [
//        {
//          key: Attr(Type.string)
//        }
//      ]
//    },
//
//    longitude: Attr(Type.number),
//    latitude: Attr(Type.number),
//
//    bookableItems: ObjArray(BookableItemModel),
//
//    // TODO security: der user könnte das hier schon auf true setzten
//    published: Attr(Type.boolean, Attr.default(false)),
//
//    owner: Ref(UserModel),
//
//    getMyActivities: Factory(),
//    getActivitiesFilterByTime: Factory({
//      activitiesIds: Type.ObjectId,
//      startDate: Type.date,
//      endDate: Type.date
//    })
//  });
//
//  var CategoryModel = new model("categories", {
//    title: Attr(Type.string),
//    key: Attr(Type.string, Type.enum("sports", "culture", "wellness")),
//    sub: [
//      {
//        title: Attr(Type.string),
//        key: Attr(Type.string)
//      }
//    ]
//  });

  return {
    Licence: Licence,
    BaseProduct: BaseProduct
  };
}();

if (typeof window !== 'undefined') {
  // we run in a browser environment

  angular.module('modelizer', [])
    .factory('models', function () {

      return models;
    });
} else {
  // assume CommonJS
  module.exports = models;
}
