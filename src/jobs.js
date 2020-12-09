import { Router } from 'express';

const router = Router();

router.get('/write', (req, res) => {
  console.log('writer');
  res.send('Writer');
});

export default router;