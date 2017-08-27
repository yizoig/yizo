//jike库
require('../Library/Array')
let Controller = require('./controller');
let Model = require('./model');
let {Code} = require('../Code/code');
let {Interface,Route} = require('./interface');
let { ValidationError, DataBaseError, BaseError }= require('./error');
let Validate =require('./validate');
let crypto = require('./crypto')
global.jike = {
    Controller,Model,Interface,Route,ValidationError, DataBaseError, BaseError ,Validate,crypto,Code
}
