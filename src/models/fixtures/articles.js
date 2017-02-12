import fixture from 'can-fixture';
import Article from '~/models/article';
import feedsStore from './feeds';
import categoriesStore from './categories';
import deepAssign from 'can-util/js/deep-assign/';
import each from 'can-util/js/each/each';

var feeds = feedsStore.getList({}).data,
    categories = categoriesStore.getList({}).data;

var now = new Date().getTime();

const articlesStore = fixture.store(500, function(i){
    var feedname = fixture.rand(feeds,1)[0].name;
    var created = can.fixture.rand(1420092000000, now);
    return {
        id: i+1,
        feedname: feedname,
        categories: fixture.rand(categories).map(c => c.abbreviation),
        url: "http://"+feedname.replace(/ /g,""),
        orig_html: "content "+i+" for "+feedname,
        title: "title "+i,
        bodytext:  "body "+i+" for "+feedname,
        relevant: Math.random() > 0.5,
        created: created,
        last_modified: created,
        objects: {}
    };
}, Article.connection.algebra);

fixture('/api/articles', articlesStore);


var subProps = {
    day: function(date){
        date = new Date(date);
        var day = new Date(date.getFullYear(), date.getMonth(), date.getDay());
        return day.getTime();
    },
    month: function(date){
        date = new Date(date);
        var day = new Date(date.getFullYear(), date.getMonth(), 1);
        return day.getTime();
    },
    year: function(date){
        date = new Date(date);
        var day = new Date(date.getFullYear(), 0, 1);
        return day.getTime();
    }
};

var makeGroupValue = function(groupByValue) {
    var parts = groupByValue.split(" ");
    var prop = parts[0];
    var subProp = parts[1];
    if(parts.length) {
        return {
            property: prop,
            getId: function(obj){
                var value = obj[prop];
                return subProps[subProp](value);
            }
        };
    } else {
        return {
            property: prop,
            getId: function(data){
                return data[prop];
            }
        };
    }
};

fixture('GET /api/articles/count', function(request){
    var set = deepAssign({}, request.data);
    var groupBy = set.groupBy.map(makeGroupValue);
    delete set.groupBy;

    var articles = articlesStore.getList(set).data;

    var groups = {};
    articles.forEach(function(article){
        var values = [];
        var data = {count: 1};
        groupBy.forEach(function(grouper){

            values.push(data[grouper.property] = article[grouper.property] );
        });


        var id = values.join("||");
        if(!groups[id]) {
            groups[id] = data;
        } else {
            groups[id].count++;
        }
    });

    var returnedGroups = [];
    each(groups, function(value){
        returnedGroups.push(value);
    });

});

export default articlesStore;
