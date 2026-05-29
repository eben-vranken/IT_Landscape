const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="nl">
      <head>
        <meta charset="utf-8" />
        <title>IT Landscape - CI/CD demo</title>
      </head>
      <body style="font-family: sans-serif; text-align: center; margin-top: 4rem;">
        <h1>Hallo vanuit Docker! 🐳</h1>
        <p>Deze pagina wordt geserveerd door een Node.js-app in een container.</p>
        <p>Automatisch gebouwd en gepublished via GitHub Actions.</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`App draait op poort ${PORT}`);
});

// Extra line for github actions retrigger
