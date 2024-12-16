import { QuestionAnsweringParameters } from './../../../node_modules/@huggingface/tasks/dist/src/tasks/question-answering/inference.d';
import { HfInference} from '@huggingface/inference'
export default async function handler(req: any, res: any) {

  try {

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const client = new HfInference(process.env.HUGGING_API)

  const textGeneration = await client.chatCompletion({
    model: "Qwen/QwQ-32B-Preview",
    messages: [
        {
            role: "user",
            content: "Generate concise, impactful statements for a portfolio hero section for full stack developer each under 45 characters limit that showcase creativity, technical expertise, and innovation to attract clients and HR.",
        }
    ],
    max_tokens: 200,
  })

    res.status(200).json({ message: textGeneration.choices[0].message.content });
  } catch (error) {
    console.error('Email error: ', error);
    res
      .status(500)
      .json({
        error: 'Failed to send email. Please try again later.',
        message: error,
      });
  }
}
