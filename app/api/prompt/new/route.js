import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
 
 export const POST = async (req, res) => {
    const { userId, prompt, tag } = await req.json();

    try {
        await connectToDB();
        const newPrompt = await Prompt.create({
            creator: userId,
            prompt,
            tag,
        });

        return new Response(JSON.stringify(newPrompt), {
            status: 201
        })
    } catch (error) {
      console.log(error);
    }
 }