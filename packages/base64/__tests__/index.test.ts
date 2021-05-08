import Base64 from '../src/';

test('Base64 Encode Decode', () => {
    const Message = 'Hello World';
    const decoded = Base64.decode(Base64.encode(Message));
    expect(decoded).toStrictEqual(Message);
});

test('type checking', () => {
    expect(() => {
        // @ts-expect-error Testing Purposes
        Base64.encode(12312);
    }).toThrowError(TypeError);
    expect(() => {
        // @ts-expect-error Testing Purposes
        Base64.decode(12312);
    }).toThrowError(TypeError);
});
