
// not yet done 
var SequelizeGuard = require('sequelize-guard');
import sequelize from "sequelize";
import client from "./client";
import owner from "./owner.js";
import property from "./property";

//initialize Sequelize

//initialize SequelizeGuard & add to db for global use
var guard = new SequelizeGuard(sequelize, options);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.guard = guard;  // <---------- Add this line



guard.init().allow('admin').to(['view', 'edit']).on('client').commit();

guard.init().allow('admin').to(['view', 'edit']).on('owner').commit();

guard.init().allow('admin').to([ 'add','view', 'edit','delete']).on('property').commit();


module.exports = db;
