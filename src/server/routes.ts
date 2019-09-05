import * as express from 'express';

import DB from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/tools', async (req, res) => {
    try {
        let tools = await DB.Tools.all();
        res.json(tools);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
    
})

export default router;