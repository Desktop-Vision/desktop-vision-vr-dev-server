const path = require('path')

module.exports = {
    mode: 'production',
    target: 'web',
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js',
    }, 
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|glb|gltf|fbx)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets',
                publicPath: `assets`
              }    
            },
          ],
        },
      ]
    }
  }
