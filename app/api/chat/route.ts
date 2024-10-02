import OpenAI from "openai";

export const POST = async (request) => {
  try {
    const { prompt } = await request.json();

    const openai = new OpenAI({
      apiKey: process.env.API_KEY,
      baseURL: "https://api.lemonfox.ai/v1",
    });

    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "Tu es un assistant utile" },
        { role: "user", content: prompt },
      ],
      model: "zephyr-chat",
    });

    return new Response(JSON.stringify(completion), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};
