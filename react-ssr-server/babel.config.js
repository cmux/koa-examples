module.exports = function (api) {
    api.cache(true)

    return {
        "presets": [
            ["@babel/preset-env", {
                "modules": false,
                "targets": {
                    "node": "current"
                }
            }],
            "@babel/preset-react",
            "@babel/preset-flow"
        ],
        "compact": "auto",
        "plugins": [
        ]
    }
}
