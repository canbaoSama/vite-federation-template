import antfu from '@antfu/eslint-config'

export default antfu({
    'stylistic': {
        indent: 4, // 4, or 'tab'
        quotes: 'single', // or 'double'
    },
    'import/order': ['error', { 'newlines-between': 'always-and-inside-groups' }], // 修复import 排序问题
    'vue/first-attribute-linebreak': [
        'error',
        {
            singleline: 'beside',
            multiline: 'ignore',
        },
    ],
    'vue/html-closing-bracket-newline': [
        'error',
        {
            singleline: 'never',
            multiline: 'never',
        },
    ],
    '@typescript-eslint/semi': 'error',
    'curly': ['error', 'multi'], // 对所有控制语句强制执行一致的大括号样式  - 该默认默认规则于 max-statements-per-line 默认规则产生冲突
})
