const db = require('./server/db');
async function run() {
    try {
        const [rows] = await db.query('SELECT name, email, password, role FROM users');
        console.log(JSON.stringify(rows));
    } catch (e) {
        console.error(e.message);
    } finally {
        process.exit(0);
    }
}
run();
