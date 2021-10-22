const path = require('path')
const ngrok = require('ngrok')

const port = process.env.PORT || 3000

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const ngrokUrl = await ngrok.connect(port)
      console.log(`NGROK URL: ${ngrokUrl}`)
      resolve({
        mode: 'none',
        target: 'web',
        entry: './index.js',
        output: {
          path: path.resolve(__dirname, 'public'),
          filename: 'bundle.js',
        },
        devServer: {
          static: './public',
          port,
          hot: false,
          liveReload: false,
          allowedHosts: 'all',
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          devMiddleware: {
            writeToDisk: true,
          },
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
                    publicPath: `${ngrokUrl}/assets`,
                  },
                },
              ],
            },
          ],
        },
      })
    } catch (error) {
      reject(error)
    }
  })
}
