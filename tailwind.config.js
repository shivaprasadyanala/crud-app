module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            borderStyle: ['hover', 'focus'],
            tableLayout: ['hover', 'focus'],
            transform: ['hover', 'focus'],
            letterSpacing: ['hover', 'focus'],
        },
    },
    plugins: [],
}