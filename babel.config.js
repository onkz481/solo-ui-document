module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'prismjs',
      {
        "languages": ["javascript", "css", "markup", "bash", "scss", "shell-session", "jsx", "tsx", "typescript"],
        "plugins": ["line-numbers"],
        "theme": "tomorrow",
        "css": true
      }
    ]
  ]
}
