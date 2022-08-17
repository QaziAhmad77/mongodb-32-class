const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    verified: {
        type: Schema.Types.Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Schema.Types.Date,
        default: Date.now
    },
    updatedAt: {
        type: Schema.Types.Date,
        default: Date.now
    }
});      


module.exports =  mongoose.model('Student' , Student);  // first Student represent collection name while second Student represent Schema name.
// model collection k hote he yaha pe hm Student collection kon export karahe he agr user ko karna hota to oska aleda schema banate or pir export karte

// ak collection me kon konse fields honge isko hm model kihte he or ese models folder me define karte he                     
// Schema hamare saat collection ka ak structure ya model hota he jistara hm student k liye bana rahe he

