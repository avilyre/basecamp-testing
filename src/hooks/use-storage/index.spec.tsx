import { useStorage } from ".";

const STORAGE_KEY = "@basecamp:user";

describe('useStorage', () => {
  it('should be able to get an item', () => {
    const mockStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    }

    mockStorage.getItem.mockReturnValueOnce('{"name":"Avily"}');

    const { getItem } = useStorage({
      key: STORAGE_KEY,
      storage: mockStorage,
    });

    expect(getItem()).toEqual({
      data: { name: 'Avily' },
      success: true,
    });
  });

  it('should be able to set an item', () => {
      const mockStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    }

    const { setItem } = useStorage({
      key: STORAGE_KEY,
      storage: mockStorage,
    });

    expect(setItem({ name: 'Avily' })).toEqual({
      data: null,
      success: true,
    });
  });

  it('should be able to remove an item', () => {
    const mockStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    }

    const { removeItem } = useStorage({
      key: STORAGE_KEY,
      storage: mockStorage,
    });

    expect(removeItem()).toEqual({
      data: null,
      success: true,
    });
  });

  it('should be able to throw an error', () => {
    const mockStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    }

    mockStorage.setItem.mockImplementationOnce(() => {
      throw new Error('Error setting item in storage');
    });

    const { setItem } = useStorage({
      key: STORAGE_KEY,
      storage: mockStorage,
    });

    expect(() => setItem({ name: 'Avily' })).toThrowError('Error setting item in storage');
  });
});