import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const userInput = body.symptom;

  try {
    const chat = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a helpful medical assistant. Provide a summary of possible conditions and advice based on symptoms. Avoid giving final diagnoses.',
        },
        {
          role: 'user',
          content: `Symptoms: ${userInput}`,
        },
      ],
      model: 'gpt-3.5-turbo',
    });

    return NextResponse.json({
      result: chat.choices[0].message.content,
    });
  } catch (error) {
    console.error("OpenAI Error:", error);
    return NextResponse.json({ error: 'AI response failed' }, { status: 500 });
  }
}
