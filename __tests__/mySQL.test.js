const mySQL=require('../modules/mysql');

test('DB connect', async () => {
    const conDB = mySQL.createConnection(mySQL.sqlConfig);
    const OUTPUT = await conDB({query:`select user, plugin from mysql.user`});
    console.log(OUTPUT[0]);
});