//SPDX-License-Identifier: MIT
pragma solidity >=0.5.0<=0.8.18;
contract SimpleStorage{
  uint data;

    function updateData(uint _data)public{
      data=_data;
    }
    function readData()public view returns (uint){
      return data;
    }
}
