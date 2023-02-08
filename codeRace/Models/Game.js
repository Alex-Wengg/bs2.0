const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    currentWordIndex : {
        type: Number,
        default : 0
    },
    socketID : {type : String},
    isPartyLeader : {type : Boolean,default : false},
    WPM : {type : Number, default: -1},
    nickName : {type : String}
});

const GameSchema = new mongoose.Schema({
    words : [{type : String}],
    isOpen : {type : Boolean,default : true},
    isOver : {type : Boolean,default : false},
    players : [PlayerSchema],
    question : QuestionSchema,

    startTime : {type : Number}
});

const QuestionSchema = new mongoose.Schema({
    id: ObjectIdSchema,
    title : [{type : String}],
    text : [{type : String}],
    file : [{type : String}]
});

module.exports = mongoose.model('Game',GameSchema);