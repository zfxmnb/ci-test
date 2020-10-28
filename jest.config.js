module.exports = {
    globals: {},
    'coverageDirectory': './coverage/',
    'collectCoverage': true,
    'collectCoverageFrom': [
        './src/*.{js,jsx}'
    ],
    moduleFileExtensions: [
        'js',
        'jsx'
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },
    testMatch: [
        '**/*.test.js'
    ],
    testEnvironment: 'jsdom'
};