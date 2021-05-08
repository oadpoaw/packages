import shorten from '../src';

test('shorten', () => {
    expect(shorten('1234567890', 10)).toStrictEqual('1234567890');
    expect(shorten('12345678900', 10)).toStrictEqual('1234567...');

    //@ts-expect-error
    expect(shorten(123, '31221')).toThrow();

    //@ts-expect-error
    expect(shorten('123123', '12213')).toThrow();
});
