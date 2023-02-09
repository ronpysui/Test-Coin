var migrateContract=artifacts.require("SimpleStorage.sol");

module.exports=function(deployer){
  deployer.deploy(migrateContract);
}
