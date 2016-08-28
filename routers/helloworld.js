var express = require('express');
var router = express.Router();

getDefaultUsers();


function getDefaultUsers(callback)
{
    //getting defaultUsers
    DefaultUsers.find().populate('user').exec(function (err, docs) {
        if (err) {
            utils.handleError(err);
            logger.debug("getDefaultUsers | err: " + JSON.stringify(err));
        }
        else
        {
            usersIds = docs.map(function(doc){return doc.user} || []) ;
            defaultUsers = usersIds ? (usersIds.map(function(doc){return (doc ? doc.qbId: [])} || []) ): [];
            if(callback != null)
                callback();
        }
    });
}

module.exports = router;