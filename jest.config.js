/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    "testMatch": [
        "**/+(*.)+(spec|test).+(ts|js)?(x)"
    ],
    "preset": "ts-jest",
    "testEnvironment": "node",
    "collectCoverage": true,
    "coverageProvider": "v8",
    "coverageDirectory": "coverage",
    "coverageReporters": [
        "text",
        "lcov",
        "clover"
    ],
    "coverageThreshold": {
        "global": {
            "branches": 80,
            "functions": 80,
            "lines": 80,
            "statements": 80,
            "ts-jest": {},
        }
    },
    "roots": [
        "<rootDir>packages/"
    ]
};