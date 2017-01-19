var webpack = require("webpack")

var folder = __dirname+'/'+process.argv[2]

var watch = !!process.argv[3]

var compiler = webpack({
  entry: folder+'/main.js',
  output: {
    path: folder,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
});

var reporter = function(err,stats){
  var timestamp = (new Date).toTimeString().split(" ")[0] + '   ';
  var message = stats.toString("errors-only") || 'React app build complete without errors!';
  console.log(timestamp, message);
};

if (watch){
  console.log("Starting to watch React app in",folder,"\n(ctrl+C to quit)")
  compiler.watch({

  },reporter);
} else {
  console.log("Building React app in",folder)
  compiler.run(reporter);
}
