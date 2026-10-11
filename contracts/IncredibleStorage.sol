// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.24;

contract IncredibleStorage {
    uint256 private awesomeUInt;

    constructor(uint256 initialValue) {
        awesomeUInt = initialValue;
    }

    function set(uint256 value) public {
        awesomeUInt = value;
    }

    function get() public view returns (uint256) {
        return awesomeUInt;
    }
}
