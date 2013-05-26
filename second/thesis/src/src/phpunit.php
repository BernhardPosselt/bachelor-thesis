<?php 
class Item {
  public function isValid() {
    return true;
  }
}

// Implementation
class ItemBusinessLayer {

  private $itemDatabaseLayer;

  public function __construct ($itemDatabaseLayer) {
    $this->itemDatabaseLayer = $itemDatabaseLayer;
  }

  public function create($item) {
    if ($item->isValid()) {
      $this->itemDatabaseLayer->save($item);
    }
  }

}