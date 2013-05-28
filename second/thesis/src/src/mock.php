<?php 
// inside PHPUnit test method
$itemDatabaseLayerMock = $this->getMockBuilder('ItemDatabaseLayer')
      ->disableOriginalConstructor()
      ->getMock();

$itemDatabaseLayerMock->expects($this->once())  // expect it to be called
      ->method('myMethod')  // mock this method
      ->with($this->equalTo('Parameter 1'))  // expect paramters
      ->will($this->returnValue(3));  // if method is called, return this value