import { Unibase } from "./unibase.js";

const API_URL = "http://localhost:5000"; 
const API_KEY = "ub_live_01cf910d6f0b3ebe3454a30497e93e39359e4708"; 

const db = new Unibase(API_URL, API_KEY);
const newUser = await db.table('users').insert({ name: 'Omkar' }).execute();

