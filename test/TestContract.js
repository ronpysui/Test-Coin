const StorageFactory=artifacts.require('StorageFactory.sol');

contract('StorageFactory',()=>{
  it('return 100^10',async()=>{
    const storage=await StorageFactory.new();
    await storage.addNum(100);
    const readData=await storage.readData();
    assert(readData.toString()===(100**10).toString())
  })
})
