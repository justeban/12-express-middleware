import Keyboard from "../../models/keyboards";

'use strict';

const storage = {};

const database = {
  guitars: {},
  keyboards: {}
};

storage.fetchAll = (dataModel) => {
  return Promise.resolve(database.dataModel);
};

storage.fetchOne = (id, dataModel) => {
  return new Promise((resolve, reject) => {
    if (database[id]) { resolve(database.dataModel[id]); }
    else { reject(`${id} not found`); }
  });
};

storage.save = (record, dataModel) => {
  
  return new Promise((resolve, reject) => {
    let item = new Keyboard(record);
    database.dataModel[item.id] = item;
    resolve(database.dataModel[item.id]);
  });
};

storage.delete = (id, dataModel) => {
  return new Promise((resolve, reject) => {
    if (database.dataModel[id]) {
      delete database.dataModel[id];
      resolve('Entry Deleted!');
    } else {
      reject('Entry was not found');
    }
  });
};

export default storage;