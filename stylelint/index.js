module.exports = {
    processors: ['stylelint-processor-arbitrary-tags'],
    rules: {
        // Possible errors
        'color-no-invalid-hex': true,
        'font-family-no-duplicate-names': true,
        'font-family-no-missing-generic-family-keyword': true,
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,
        'string-no-newline': true,
        'unit-no-unknown': true,
        'property-no-unknown': [true, {
            ignoreProperties: ['composes', 'icon-font'],
        }],
        'keyframe-declaration-no-important': true,
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'block-no-empty': null,
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-no-unknown': true,
        'selector-type-no-unknown': true,
        'media-feature-name-no-unknown': true,
        'at-rule-no-unknown': true,
        'comment-no-empty': true,
        'no-descending-specificity': [true, {
            severity: 'warning',
        }],
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-extra-semicolons': true,
        'no-invalid-double-slash-comments': true,

        // Limit language features
        'color-named': ['always-where-possible'],
        // @unnessesary: 'color-no-hex',
        // @unnessesary: 'function-blacklist',
        // @unnessesary: 'function-url-no-scheme-relative',
        // @unnessesary: 'function-url-scheme-blacklist',
        // @unnessesary: 'function-url-scheme-whitelist',
        // @unnessesary: 'function-whitelist',
        // @TODO: keyframes-name-pattern,
        'number-max-precision': [6],
        // @TODO: 'time-min-milliseconds': ,
        // @unnessesary: 'unit-blacklist',
        // @unnessesary: 'unit-whitelist',
        'shorthand-property-no-redundant-values': true,
        // @disagreed: 'value-no-vendor-prefix': true,
        // @unnessesary: 'custom-property-pattern',
        // @unnessesary: 'property-blacklist',
        // @disagreed: 'property-no-vendor-prefix',
        // @unnessesary: 'property-whitelist',
        'declaration-block-no-redundant-longhand-properties': true,
        // @disagreed: 'declaration-no-important': true,
        // @unnessesary: 'declaration-property-unit-blacklist',
        // @unnessesary: 'declaration-property-unit-whitelist',
        // @unnessesary: 'declaration-property-value-blacklist',
        // @unnessesary: 'declaration-property-value-whitelist',
        'declaration-block-single-line-max-declarations': [2],
        // @unnessesary: 'selector-attribute-operator-blacklist',
        // @unnessesary: 'selector-attribute-operator-whitelist',
        // @TODO: 'selector-class-pattern',
        // @TODO: 'selector-combinator-blacklist',
        // @TODO: 'selector-combinator-whitelist',
        // @TODO: 'selector-id-pattern',
        // @disagreed: 'selector-max-attribute',
        // @TODO: 'selector-max-class',
        // @TODO: 'selector-max-combinators',
        // @TODO: 'selector-max-compound-selectors',
        // @TODO: 'selector-max-empty-lines',
        // @TODO: 'selector-max-id',
        // @TODO: 'selector-max-pseudo-class',
        // @TODO: 'selector-max-specificity',
        // @TODO: 'selector-max-type',
        // @TODO: 'selector-max-universal',
        // @TODO: 'selector-nested-pattern',
        // @TODO: 'selector-no-qualifying-type',
        // @TODO: 'selector-no-vendor-prefix',
        // @unnessesary: 'selector-pseudo-class-blacklist',
        // @unnessesary: 'selector-pseudo-class-whitelist',
        // @unnessesary: 'selector-pseudo-element-blacklist',
        // @unnessesary: 'selector-pseudo-element-whitelist',
        // @unnessesary: 'media-feature-name-blacklist',
        // @unnessesary: 'media-feature-name-no-vendor-prefix',
        // @unnessesary: 'media-feature-name-value-whitelist',
        // @unnessesary: 'media-feature-name-whitelist',
        // @unnessesary: 'custom-media-pattern',
        // @unnessesary: 'at-rule-blacklist',
        // @unnessesary: 'at-rule-no-vendor-prefix',
        // @unnessesary: 'at-rule-whitelist',
        // @unnessesary: 'comment-word-blacklist',
        // @TODO: max-nesting-depth,
        'no-unknown-animations': true,

        // Stylistic issues
        'color-hex-case': ['lower'],
        'color-hex-length': ['short'],
        'font-family-name-quotes': ['always-where-recommended'],
        // @TODO: 'font-weight-notation': [],
        'function-comma-newline-after': ['always-multi-line'],
        'function-comma-newline-before': ['never-multi-line'],
        'function-comma-space-after': ['never-single-line'],
        'function-comma-space-before': ['never'],
        'function-max-empty-lines': [0],
        'function-name-case': ['lower'],
        'function-parentheses-newline-inside': ['always-multi-line'],
        'function-parentheses-space-inside': ['never-single-line'],
        'function-url-quotes': ['always'],
        'function-whitespace-after': ['always'],
        'number-leading-zero': ['always'],
        'number-no-trailing-zeros': true,
        // @TODO: 'string-quotes',
        'length-zero-no-unit': true,
        'unit-case': ['lower'],
        'value-keyword-case': ['lower'],
        'value-list-comma-newline-after': ['always-multi-line'],
        'value-list-comma-newline-before': ['never-multi-line'],
        'value-list-comma-space-after': ['always-single-line'],
        'value-list-comma-space-before': ['never'],
        'value-list-max-empty-lines': [0],
        // 'custom-property-empty-line-before': ['never'],
        'property-case': ['lower'],
        'declaration-bang-space-after': ['never'],
        'declaration-bang-space-before': ['always'],
        'declaration-colon-newline-after': ['always-multi-line'],
        'declaration-colon-space-after': ['always-single-line'],
        'declaration-colon-space-before': ['never'],
        // 'declaration-empty-line-before': ['never'],
        'declaration-block-semicolon-newline-after': ['always-multi-line'],
        'declaration-block-semicolon-newline-before': ['never-multi-line'],
        'declaration-block-semicolon-space-after': ['always-single-line'],
        'declaration-block-semicolon-space-before': ['never'],
        'declaration-block-trailing-semicolon': ['always'],
        'block-closing-brace-empty-line-before': ['never'],
        'block-closing-brace-newline-after': ['always'],
        'block-closing-brace-newline-before': ['always-multi-line'],
        // @has-problem: 'block-closing-brace-space-after': ['never'],
        'block-closing-brace-space-before': ['always-single-line'],
        'block-opening-brace-newline-after': ['always-multi-line'],
        // @has-problem: 'block-opening-brace-newline-before': ['never-single-line'],
        'block-opening-brace-space-after': ['always-single-line'],
        'block-opening-brace-space-before': ['always'],
        'selector-attribute-brackets-space-inside': ['never'],
        'selector-attribute-operator-space-after': ['never'],
        'selector-attribute-operator-space-before': ['never'],
        'selector-attribute-quotes': ['always'],
        'selector-combinator-space-after': ['always'],
        'selector-combinator-space-before': ['always'],
        'selector-descendant-combinator-no-non-space': true,
        'selector-pseudo-class-case': ['lower'],
        'selector-pseudo-class-parentheses-space-inside': ['never'],
        'selector-pseudo-element-case': ['lower'],
        'selector-pseudo-element-colon-notation': ['double'],
        'selector-type-case': ['lower'],
        'selector-list-comma-newline-after': ['always-multi-line'],
        'selector-list-comma-newline-before': ['never-multi-line'],
        'selector-list-comma-space-after': ['always-single-line'],
        'selector-list-comma-space-before': ['never'],
        // 'rule-empty-line-before': ['always-multi-line', {
        //     except: ['first-nested', 'after-rule'],
        // }],
        'media-feature-colon-space-after': ['always'],
        'media-feature-colon-space-before': ['never'],
        'media-feature-name-case': ['lower'],
        'media-feature-parentheses-space-inside': ['never'],
        'media-feature-range-operator-space-after': ['always'],
        'media-feature-range-operator-space-before': ['always'],
        'media-query-list-comma-newline-after': ['always-multi-line'],
        'media-query-list-comma-newline-before': ['never-multi-line'],
        'media-query-list-comma-space-after': ['always-single-line'],
        'media-query-list-comma-space-before': ['never'],
        'at-rule-empty-line-before': ['always', {
            except: ['blockless-after-blockless', 'first-nested'],
            ignore: ['after-comment'],
        }],
        'at-rule-name-case': ['lower'],
        // @disagreed: 'at-rule-name-newline-after':
        'at-rule-name-space-after': ['always-single-line'],
        'at-rule-semicolon-newline-after': ['always'],
        'at-rule-semicolon-space-before': ['never'],
        // @disagreed: 'comment-empty-line-before': ['never'],
        'comment-whitespace-inside': ['always'],
        indentation: [4],
        'max-empty-lines': [1],
        // @disagreed: 'max-line-length': [],
        'no-eol-whitespace': true,
        'no-missing-end-of-source-newline': true,
    },
};
