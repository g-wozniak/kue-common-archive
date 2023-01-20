const coveragePathIgnorePatterns = [
    'node_modules',
    'index.ts'
]

const moduleMapperForServer = {
    '@root/(.*)': '<rootDir>/src/$1',
    '@intf/(.*)': '<rootDir>/src/intf/$1',
    '@helpers/(.*)': '<rootDir>/src/helpers/$1',
    '@properties/(.*)': '<rootDir>/src/properties/$1',
    '@routes/(.*)': '<rootDir>/src/routes/$1',
    '@models/(.*)': '<rootDir>/src/models/$1'
}

module.exports = {
    verbose: true,
    rootDir: '.',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/src/**/*.test.ts'],
    transform: {
        '^.+\\.(ts)$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'js'],
    moduleNameMapper: moduleMapperForServer,
    coveragePathIgnorePatterns,
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts}'
    ],
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 50,
            lines: 50,
            statements: -500
        }
    }
}