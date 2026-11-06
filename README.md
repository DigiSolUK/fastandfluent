# Fast & Fluent with Aaryan

A static maths practice site for ages 10–15. The three levels use selected topics from England’s mathematics curriculum for Year 6, Key Stage 3 and early Key Stage 4.

Serve this folder over HTTP to preview the site locally.

```sh
python -m http.server 8000
```

Open `http://localhost:8000`. GitHub Pages publishes the root of the `main` branch. No build step is needed.

Edit `lessons.js` to update the worked examples, questions, hints and answer explanations. The Quick 5 draws from five different topics at the selected level. A lesson is cleared when all three practice answers are correct. Clears are stored in the current browser. The site has no accounts or analytics.

The Outfit font is bundled under the SIL Open Font License in `assets/Outfit-OFL.txt`.
