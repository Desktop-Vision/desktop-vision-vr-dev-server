const path = require('path')
const ngrok = require('ngrok')

const port = process.env.PORT || 3000

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const ngrokUrl = await ngrok.connect(port)
      resolve(
        {
          mode: 'none',
          target: 'web',
          entry: './index.js',
          output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'bundle.js',
          },
          devServer: {
            writeToDisk: true,
            contentBase: './public',
            disableHostCheck: true,
            port,
            hot: false,
            inline: false,
            liveReload: false,
            injectClient: false,
            headers: {
              "Access-Control-Allow-Origin": "*"
            }  
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
                      publicPath: `${ngrokUrl}/assets`
                    }    
                  },
                ],
              },
            ]
          }
        }
      )
    } catch (error) {
      reject(error)
    }
  })
}