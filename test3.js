const db = new Unibase(API_URL, API_KEY);

const testUser = db.auth.signIn({
    username: "omkar",
    email: "omkar@gmail.com",
    password: "1234"
});

const result = await db.table("users").insert({field: value})
                                      .where({ id: someId })

const result1 = await db.query("SELECT * FROM USERS WHERE username = $1", ["omkar"]);