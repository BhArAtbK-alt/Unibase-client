import { Unibase } from "./unibase.js";
import { readFileSync } from "fs";
import { Blob } from "buffer";

const API_URL = "https://intuitional-accustomably-ross.ngrok-free.dev"; 
const API_KEY = "ub_live_01cf910d6f0b3ebe3454a30497e93e39359e4708"; 
const db = new Unibase(API_URL, API_KEY);

async function startQuickDemo() {
    console.log("🚀 Unibase Live Demo: Auth | SQL | Graph");

    try {
        const result = await db.collection("posts").updateDoc(
            { author: "User_01" }, {status: "not reviewed"}
        )
            
            console.log(result);
            
    } catch (err) {
        console.error("\n❌ Demo Error:", err.message);
    }
}

startQuickDemo();