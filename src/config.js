var config = {
	ROOT_URL : 'http://localhost:9984/api/v1/',
	API_PATH : 'https://test.bigchaindb.com/api/v1/',
	app_id: 'YOUR_APP_ID',
	app_key: 'YOUR_APP_KEY',
	bcdb_search_term: 'alianz_inter_test', //should be synced with python files
	bcdb_metadata_term: 'status',
	card_name: 'admin@allianz-network',
	dev_mode: true, //If dev mode -> false, then ics needs a proper ipfs-daemon to work!
	identity: 'Secret' //Dont change it
};

module.exports = config;
