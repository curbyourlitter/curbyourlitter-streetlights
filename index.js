var gith = require('gith').create(9001);
var spawn = require('child_process').spawn;

gith.ips.push('*');
gith().on('all', function(payload) {
    console.log('Gith detected activity on ' + payload.repo + '#' + payload.branch);
    if (payload.repo === 'curbyourlitter/curbyourlitter-sidewalk' && payload.branch === 'gh-pages') {
        spawn('bash', ['~/sidewalk/build/pull.sh']);
    }
    if (payload.repo === 'curbyourlitter/curbyourlitter-alley' && payload.branch === 'master') {
        // Nothing yet, but consider deploying
    }
});
