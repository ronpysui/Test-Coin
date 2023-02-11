//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SimpleStorage.sol";

contract StorageFactory{
  uint256 num;
  SimpleStorage[] public simpleStorageArray;

  function createSimpleStorageContract()public{
    SimpleStorage simpleStorage=new SimpleStorage();
    simpleStorageArray.push(simpleStorage);
  }
  function addNum(uint256 _num)public{
    num=_num**10;
  }
  function readData()public view returns(uint256){
    return num;
  }
}
