//var migrateContract=artifacts.require("SimpleStorage.sol");
var migrateStorage=artifacts.require("StorageFactory.sol");

module.exports=function(deployer){
  deployer.deploy(migrateStorage);
}
