const HelloWorld = require('./index');

test('Hello World', () => {
    expect(HelloWorld()).toBe('Hello World');
});

