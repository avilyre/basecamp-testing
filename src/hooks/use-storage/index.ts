export type StorageProviderType = {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
}

type StorageType = {
  key: `@basecamp:${string}`;
  storage: StorageProviderType;
}

type StorageActionResultType<T> = {
  data: T | null;
  success: boolean;
}

export const useStorage = <T>(props: StorageType) => {
  const { key, storage } = props;

  const getItem = (): StorageActionResultType<T> => {
    try {
      const result = storage.getItem(key);
      const parsedResult = result ? JSON.parse(result) : null;

      return {
        data: parsedResult,
        success: true,
      };
    } catch(error) {
      throw new Error('Error getting item from storage');
    }
  }

  const setItem = (data: unknown): StorageActionResultType<T> => {
    try {
      storage.setItem(key, JSON.stringify(data));
      return { data: null, success: true }
    } catch(error) {
      throw new Error('Error setting item in storage');
    }
  }

  const removeItem = (): StorageActionResultType<T> => {
    try {
      storage.removeItem(key);
      return { data: null, success: true }
    } catch(error) {
      throw new Error('Error removing item from storage');
    }
  }

  return {
    getItem,
    setItem,
    removeItem,
  };
};
