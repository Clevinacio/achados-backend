module.exports = {
    "name": process.env.ENV_LOCAL,
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "logging": true,
    "migrations": [
        process.env.MIGRATIONS_PATH
    ],
    "entities": [
        process.env.ENTITIES_PATH
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations",
        "entitiesDir": "./src/models"
    }
}
