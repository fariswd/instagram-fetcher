var express      = require('express')
var router       = express.Router()
const url        = require('url'); // built-in utility
const request    = require('request');

router.get('/', function (req, res) {
  if(!req.query.l){
    res.send('invalid query')
  }

  let suffix = '/media/?size='
  let fixUrl = `${url.parse(req.query.l).protocol}//${url.parse(req.query.l).host}${url.parse(req.query.l).pathname}`

  if(req.query.v){
    request(req.query.l, function (error, response, body) {
      let re = /https.*mp4/gi;
      let found = body.match(re);
      let obj = {
        links: req.query.l,
        pic_t: fixUrl+suffix+'t',
        pic_m: fixUrl+suffix+'m',
        pic_l: fixUrl+suffix+'l',
        vid: found[0]
      }
      res.send(obj)
    });

  } else {
    let obj = {
      links: req.query.l,
      pic_t: fixUrl+suffix+'t',
      pic_m: fixUrl+suffix+'m',
      pic_l: fixUrl+suffix+'l'
    }
    res.send(obj)
  }

})

module.exports = router
