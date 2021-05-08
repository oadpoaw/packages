import merge from '../src';

test('simple merge', () => {
    const target = {
        myNumber: 1,
        myObject: {
            someValue: 1,
            someNestedObject: {
                someValue: 1,
            },
        },
        someNestedObject: {
            someValue: 1,
            someNestedObject: {
                someValue: 1,
            },
        },
    };

    const source = {
        myNumber: 0,
        myObject: {
            someValue: 0,
        },
    };

    const exact = {
        myNumber: 0,
        myObject: {
            someValue: 0,
            someNestedObject: {
                someValue: 1,
            },
        },
        someNestedObject: {
            someValue: 1,
            someNestedObject: {
                someValue: 1,
            },
        },
    };

    expect(merge(target, source)).toEqual(exact);
});

test('should not merge if its not a plain object', () => {
    const obj = new Object();
    const instance = new (class SomeClass {})();
    const str = '';
    const int = 1;
    expect(merge(obj, obj)).toEqual({});
    expect(merge(instance, instance)).toEqual({});
    expect(merge(str, str)).toEqual({});
    expect(merge(int, int)).toEqual({});
});

test('should not be subject to prototype pollution', () => {
    expect(() => {
        merge(
            {},
            JSON.parse('{ "props": "abc", "__proto__" : { "bool" : true } }'),
            {
                clone: false,
            },
        );
    }).not.toThrow();
});
