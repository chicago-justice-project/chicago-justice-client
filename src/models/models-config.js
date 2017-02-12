var ArticleCount = require("./article-count");
var Feed = require("./feed");
var Category = require("./category");

module.exports = [
    {
        model: ArticleCount,
        dimensions: [
            {
                property: "feedname",
                component: "filter-belongs-to",
                Model: Feed,
                display: "name"
            },
            {
                property: "categories",
                component: "filter-has-and-belongs-to-many",
                Model: Category,
                display: "category_name"
            },
            {
                property: "created",
                component: "filter-date"
            }
        ]
    }
];
