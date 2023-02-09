const SimpleStorage=artifacts.require("SimpleStorage.sol");
contract('SimpleStorage',()=>{
  it("will input uint value",async()=>{
    const getInput=await SimpleStorage.new();
    await getInput.updateData(999);
    const read=await getInput.readData();
    assert(read.toString()==='999');
  });
});
