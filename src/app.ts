import "reflect-metadata";
import express from "express";
import { Client } from 'pg';

const app = express();
if (process.env.LOCAL_ENV == "production") {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });

    client.connect();
}

export { app };