import crypto from 'crypto';

const generateSecretKey = (num: number = 32) => {
  return crypto.randomBytes(num).toString('hex');
};

export default generateSecretKey;
