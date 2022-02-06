import App from './app';

describe('app', () => {
  const app = new App();

  test('should build', () => {
    expect(app.build()).toBe('It works');
  });
});
