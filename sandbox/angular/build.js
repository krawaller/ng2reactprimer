var webpack = require("webpack")

var folder = __dirname+'/'+process.argv[2]

var watch = !!process.argv[3]

var compiler = webpack({
  entry: folder+'/main.ts',
  output: {
    path: folder,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".ts",".js",""]
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: ['node_modules']
    }]
  }
});

var reporter = function(err,stats){
  var timestamp = (new Date).toTimeString().split(" ")[0] + '   ';
  var message = stats.toString("errors-only") || 'Angular app build complete without errors!';
  console.log(timestamp, message);
};

if (watch){
  console.log("Starting to watch Angular app in",folder,"\n(ctrl+C to quit)")
  compiler.watch({

  },reporter);
} else {
  console.log("Building Angular app in",folder)
  compiler.run(reporter);
}
