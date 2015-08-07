var gith = require('gith').create(9001);

gith.ips.push('*');
gith().on('all', function(payload) {
    console.log('Post-receive happened!');
});
