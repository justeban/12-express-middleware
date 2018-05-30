'use stict';

import uuid from 'uuid/v4';
import storage from '../lib/storage/data-store.js';

class Guitar {

  constructor(record) {
    this.id = uuid();
    this.brand = record && record.brand || '';
    this.model = record && record.model || '';
    this.price = record && record.price || '';
  }

  static fetchAll(dataModel) {
    return storage.fetchAll(dataModel);
  }

  static fetchOne(id, dataModel) {
    return storage.fetchOne(id, dataModel);
  }

  static deleteOne(id, dataModel) {
    return storage.delete(id, dataModel);
  }

  save(dataModel) {
    return storage.save(this, dataModel);
  }

};

export default Guitar;