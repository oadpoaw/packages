import Base64 from '../src/';

test('Base64 Encode Decode', () => {
    const Message = 'Hello World';

    let decoded = Base64.decode(Base64.encode(Message));

    expect(decoded).toBe(Message);
});
