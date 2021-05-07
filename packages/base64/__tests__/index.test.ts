import Base64 from '../src/';

test('Base64 Encode Decode', () => {
    const Message = 'Hello World';

    let decoded = Base64.decode(Base64.encode(Message));

    expect(decoded).toBe(Message);
});

test('Base64 Class should throw an error when instantiate', () => {
    expect(() => {
        new Base64();
    }).toThrow(Error);
});
