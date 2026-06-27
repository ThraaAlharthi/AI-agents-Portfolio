
import Anthropic from "@anthropic-ai/sdk";

import * as readline from "readline";

const client = new Anthropic({

  apiKey: "YOUR_API_KEY_HERE",

});

const rl = readline.createInterface({

  input: process.stdin,

  output: process.stdout,

});

async function writeEmail(description) {

  const message = await client.messages.create({

    model: "claude-opus-4-5",

    max_tokens: 500,

    messages: [

      {

        role: "user",

        content: `You are a professional email writer. Based on the description below, write a clear, polite, and professional email. Include a subject line, greeting, body, and sign-off.\n\nDescription: ${description}`,

      },

    ],

  });

  console.log("\n📧 Your Professional Email:\n");

  console.log(message.content[0].text);

  rl.close();

}

rl.question("Describe the email you want to write:\n\n", (input) => {

  writeEmail(input);

});

