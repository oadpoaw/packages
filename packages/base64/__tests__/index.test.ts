import Base64 from '../src/';

test('Base64 Encode Decode', () => {
    const Message = 'Hello World';
    let decoded = Base64.decode(Base64.encode(Message));
    expect(decoded).toStrictEqual(Message);
});

test('Base64 Class should throw an error when instantiate', () => {
    expect(() => {
        new Base64();
    }).toThrow(Error);
});

test('type checking', () => {
    expect(() => {
        //@ts-expect-error
        Base64.encode(12312);
    }).toThrowError(TypeError);
    expect(() => {
        //@ts-expect-error
        Base64.decode(12312);
    }).toThrowError(TypeError);
});
