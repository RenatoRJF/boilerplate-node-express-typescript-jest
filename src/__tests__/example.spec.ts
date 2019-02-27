import 'jest';

describe('Jest Test', () => {
  test('Verify tests work', () => {
    let language: string;

    language = 'English';

    expect(typeof language).toBe('string');
  });
});
