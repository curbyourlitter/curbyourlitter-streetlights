var gith = require('gith').create(9001);
var spawn = require('child_process').spawn;

gith.ips.push('*');
gith().on('all', function(payload) {
    console.log('Gith detected activity on ' + payload.repo + '#' + payload.branch);
    if (payload.repo === 'curbyourlitter/curbyourlitter-sidewalk' && payload.branch === 'gh-pages') {
        console.log('Push to curbyourlitter-sidewalk detected, pulling');
        var pull = spawn('bash', ['~/sidewalk/build/pull.sh']);
        pull.stdout.on('data', function (data) {
            console.log(data.toString());
        });
        pull.stderr.on('data', function (data) {
            console.log(data.toString());
        });
        pull.on('close', function (code) {
            console.log('Pull exited with code ' + code);
        });
    }
    if (payload.repo === 'curbyourlitter/curbyourlitter-alley' && payload.branch === 'master') {
        // Nothing yet, but consider deploying
    }
});
