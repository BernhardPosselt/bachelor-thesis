<?php 

class Container extends Pimple {

	public function __construct () {
		// also make Super-Globals injectable 
		$this['Request'] = array(
			'POST' => $_POST,
			'GET' => $_GET,
			'SERVER' => $_SERVER
			// etc
		);

		$this['ItemBusinessLayer'] = function ($c) {
			return new ItemBusinessLayer($c['ItemDatabaseLayer']);
		}

		// create only one instance ever
		$this['ItemDatabaseLayer'] = $this->share(function ($c) {
			return new ItemDatabaseLayer($c['Request']);
		});
	}

}