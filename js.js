define(["dojo/request/script"], function(scrpt){
	var cache = {};
	return {
		load: function(id, mod, cb) {
			var parts = id.split(",");
			var js_path = parts[0];
			var checkString = parts[1];

			if (cache[js_path]) {
				cb();
				return;
			}

			scrpt(js_path, {checkString: checkString}).then(function(){
				cache[js_path] = true;
				cb();
			});

		}
	}
});