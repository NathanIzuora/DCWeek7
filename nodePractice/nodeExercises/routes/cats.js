var express = require('express');

var router = express.Router();

router.get('/cats', function(req, res){
    res.render('cats.ejs', {cat_sound : "meow",
                            imgTag: "http://r.ddmcdn.com/w_830/s_f/o_1/cx_0/cy_66/cw_288/ch_162/APL/uploads/2014/10/cat_5-1.jpg"

});
});

module.exports = router;
