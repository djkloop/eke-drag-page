const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
module.exports = {
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin(
        {
          languages: ['javascript', 'css', 'html', 'json', 'typescript'],
          features: ['coreCommands', 'find'],
        }
      ),
    ],
  },
}
