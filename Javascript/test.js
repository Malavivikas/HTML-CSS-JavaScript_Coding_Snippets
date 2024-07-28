const https = require("https");
const fs = require("fs");
const crypto = require("crypto");

https
  .get("https://coderbyte.com/api/challenges/json/age-counting", (resp) => {
    let data = "";
    resp.on("data", (chunk) => {
      data += chunk;
    });
    resp.on("end", () => {
      try {
        let jsonData = JSON.parse(data);
        let items = jsonData.data.split(", ");

        let keys = [];
        for (let i = 0; i < items.length; i += 2) {
          let keyValue = items[i].split("=")[1];
          let ageValue = parseInt(items[i + 1].split("=")[1]);

          if (ageValue === 32) {
            keys.push(keyValue);
          }
        }
        const varOcg = keys.join("\n") + "\n";
        fs.writeFileSync("output.txt", varOcg, "utf8");
        const fileBuffer = fs.readFileSync("output.txt");
        const sha1Hash = crypto
          .createHash("sha1")
          .update(fileBuffer)
          .digest("hex");
        console.log(sha1Hash);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
