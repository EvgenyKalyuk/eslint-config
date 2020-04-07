module.exports = {
    DEFAULT_SPACES: 4,
    DEFAULT_MAX_LENGTH: 120,

    OFF: 0, // turn the rule off
    WARNING: 1, // turn the rule on as a warning (doesn't affect exit code)
    ERROR: 2, // turn the rule on as an error (exit code is 1 when triggered)

    NEVER: 'never',
    ALWAYS: 'always',
    AS_NEEDED: 'as-needed',

    BEFORE: 'before',
    AFTER: 'after'
};
