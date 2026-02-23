import { Unibase } from "./unibase.js"; 

// CONFIGURATION
const API_URL = "http://localhost:5000"; 
const API_KEY = "ub_live_01cf910d6f0b3ebe3454a30497e93e39359e4708"; // Replace with your actual key

// Initialize SDK
const db = new Unibase(API_URL, API_KEY);

const result = await db.query("SELECT * FROM USERS WHERE username = $1", ["omkar"]);

const result = await db.table("users").insert({field: value})
                                      .where({ id = 1 })