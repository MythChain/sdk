// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Myth {
    string public name = "Myth";
    string public message = "Decentralized future shaped by code and community";

    function updateMessage(string memory _message) public {
        message = _message;
    }
}
```
