export const PORT = process.env.PORT || 9000
export const JWT_SECRET = process.env.JWT_SECRET || "itsabigsecret-donttellanybody"

export const DATABASE_HOST = process.env.DATABASE_HOST || "localhost"
export const DATABASE_PORT = Number(process.env.DATABASE_PORT) || 3306
export const DATABASE_USER = process.env.DATABASE_USER || "root"
export const DATABASE_PASS = process.env.DATABASE_PASS || "root"
export const DATABASE_NAME = process.env.DATABASE_NAME || "database"
