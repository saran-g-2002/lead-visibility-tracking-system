const db = require('./server/db');

async function test() {
    try {
        const [rows] = await db.query(`
            SELECT 
                DATE_FORMAT(enquiryDate, '%b %Y') as name, 
                COUNT(*) as leads,
                SUM(CASE WHEN status = 'converted' THEN 1 ELSE 0 END) as admissions
            FROM leads 
            WHERE enquiryDate IS NOT NULL AND enquiryDate != ''
            GROUP BY DATE_FORMAT(enquiryDate, '%Y-%m'), DATE_FORMAT(enquiryDate, '%b %Y')
            ORDER BY MIN(enquiryDate) DESC
            LIMIT 12
        `);
        console.log(JSON.stringify(rows, null, 2));
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

test();
