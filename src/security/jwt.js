import jwt from 'jsonwebtoken'

import  { JWT_SECRET } from '~/environment'

export const sign = user => jwt.sign(JSON.parse(JSON.stringify(user)), JWT_SECRET)

export default async c => {
  const authHeader = c.request.headers['authorization']
  if (!authHeader)
    return false
  const token = authHeader.replace('Bearer ', '')
  return jwt.verify(token, JWT_SECRET)
}
