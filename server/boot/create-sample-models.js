module.exports = function(app) {

    app.dataSources['7HackDB'].automigrate(['Serie', 'Zeitangabe', 'Kleidung'], function(err) {
        if (err) throw err;

        console.log('Done');

        app.dataSources['7HackDB'].automigrate(['AccessToken', 'ACL', 'RoleMapping', 'Role'], function(err) {
            if (err) throw err;

            console.log('Done');
        });
    });
};
