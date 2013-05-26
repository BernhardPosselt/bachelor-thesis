<?php 
// Test
class ItemBusinessLayerTest extends PHPUnit_Framework_TestCase {

  public function testCreateItem () {
    // create a new mock of the item database layer
    $itemDatabaseLayer = $this->getMockBuilder('ItemDatabaseLayer')
      ->disableOriginalConstructor()
      ->getMock();
    $item = new Item();

    $itemBusinessLayer = new ItemBusinessLayer($itemDatabaseLayer);

    $itemDatabaseLayer->expects($this->once())
      ->method('save')
      ->with($this->equalTo($item));

    $itemBusinessLayer->create($item);
  }

}

