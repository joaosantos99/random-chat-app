import { Model } from 'mongoose';

import { MongoBaseRepositoryInterface } from 'src/libs/interfaces/mongo-base.interface';

export class MongoBaseRepository<T> implements MongoBaseRepositoryInterface<T> {
  protected _repository: Model<T>;

  constructor(repository: Model<T>) {
    this._repository = repository;
  }

  findAll() {
    return this._repository.find({}).exec();
  }

  findOneById(id) {
    return this._repository.findById(id).exec();
  }

  findOne(obj: T) {
    return this._repository.findOne(obj).exec();
  }

  create(obj: T) {
    return this._repository.create(obj);
  }
}
