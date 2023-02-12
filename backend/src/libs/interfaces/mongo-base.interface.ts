export interface MongoBaseRepositoryInterface<T> {
  findAll(): Promise<T[]>;

  findOneById(id: string): Promise<T>;

  //   findAllWithQuery(): Promise<T[]>;

  findOne(obj: any): Promise<T>;

  create(obj: T): Promise<T>;

  //   insertMany(): Promise<T[]>;

  //   update(): Promise<T>;

  //   deleteMany(): Promise<number>;

  //   countDocuments(): Promise<number>;

  //   findOneByFieldAndUpdate(): Promise<T>;

  //   findOneAndRemoveByField(): Promise<T>;

  //   startTransaction(): Promise<void>;

  //   commitTransaction(): Promise<void>;

  //   abortTransaction(): Promise<void>;

  //   endSession(): Promise<void>;
}
