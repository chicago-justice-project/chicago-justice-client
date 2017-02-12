import fixture from 'can-fixture';
import Category from '../category';




const store = fixture.store([
    {abbreviation: "ARSN", name: "Arson"},
    {abbreviation: "BEAT", name: "Beat Realignment"},
    {abbreviation: "BURG", name: "Burglury"},
    {abbreviation: "CCCC", name: "Cook COunty Circuit Court"},
    {abbreviation: "CCJ", name: "Cook County Jail"},
    {abbreviation: "CCSP", name: "Cook County Sheriff's Police"}
], Category.connection.algebra);

fixture('/api/categories', store);

export default store;
