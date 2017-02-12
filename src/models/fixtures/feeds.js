import fixture from 'can-fixture';
import Feed from '../feed';

var feeds = ['ABC Local',
     'Beachwood Reporter',
     'CBS Local',
     'Chicago Defender',
     'Chicago Magazine',
     'Chicago Journal',
     'Chicago Now',
     'Chicago Reader',
     'Chicago Reporter',
     'Crains',
     'DNAInfo Chicago',
     'Fox Chicago',
     'NBC Local',
     'Chicago News Cooperative',
     'Chicago Sun-Times',
     'Chicago Tribune',
     'WBEZ',
     'WGN TV',
     'Windy City Times',
     'WLS AM',
     'WTTW'].map(function(name, index){
         return {
             id: index+1,
             name: name,
             created: new Date().getTime()
         };
     });

const store = fixture.store(feeds, Feed.connection.algebra);

fixture('/api/feeds', store);

export default store;
