'use stricts';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + "/js/src/",
    entry: {
        app: "./app"
    },

    output: {
        path: __dirname + "/js/build",
        publicPath: __dirname + "/js/build/",
        filename: "[name].js",
        library: "[name]"     // параметр для доступа к экспортируемым переменным, если нужно будет вызвать экспортируемые функции позже (home.welcome();)
    },

    watch: NODE_ENV == 'development',    //настройка для ожидания изменений и автоматической пересборки после каждого сохранения файлов

    watchOptions: {
        aggregateTimeout: 100   //Указывается количество милисек, в теч. которых webpack ждет до перезапуска сборки
    },

    devtool: NODE_ENV == 'development' ? "source-map" : null,    //для того чтобы при дэбаге находитьс в исходном файле модуля

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        root: __dirname + "/node_modules",
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    module: {

        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            //loaders: ['style', 'css', 'resolve-url']
            //loader: "style!css!"
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }]
    },

    plugins: [
        new ExtractTextPlugin("[name].css"),

        new webpack.NoErrorsPlugin(),   // если будет ошибка во время сборки, файлы не сгенерятся

        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV) // для передачи тех ключей окружения, которые необходимо сделать доступными клиенту
        }),

        new webpack.optimize.UglifyJsPlugin({   // для минификации
            compress: {
                warnings: false
            }
        }),

        new webpack.optimize.CommonsChunkPlugin({   // выделяется общий кусок из всех файлов, если есть несколько точек сборки
            name: "common"
        })
    ]
};