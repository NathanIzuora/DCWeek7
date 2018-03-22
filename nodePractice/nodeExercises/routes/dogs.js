var express = require('express');

var router = express.Router();

router.get('/dog', function(req, res){
    res.render('cats.ejs', {cat_sound : "Woof",
                            imgTag: "https://i.ytimg.com/vi/2Y1ZyjGdPeE/maxresdefault.jpg"

});
});

module.exports = router;

