type StorageObjectMap = {
  'App/session': {
    user: string;
    token: string;
  };
  'App/search_history': any;
};

export type StorageObjectType = 'App/session' | 'App/search_history';

export type StorageObjectData<T extends StorageObjectType> = {
  type: T;
  data: StorageObjectMap[T];
};
