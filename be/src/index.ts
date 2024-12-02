import Anthropic from "@anthropic-ai/sdk";


require('dotenv').config()

const CLAUDE_API_KEY = process.env.ANTHROPIC_API_KEY

const anthropic = new Anthropic({
  // defaults to process.env["ANTHROPIC_API_KEY"]
  apiKey:CLAUDE_API_KEY,
});

const msg = await anthropic.messages.create({
  model: "claude-3-5-sonnet-20241022",
  max_tokens: 1000,
  temperature: 0,
  messages: []
});
console.log(msg);