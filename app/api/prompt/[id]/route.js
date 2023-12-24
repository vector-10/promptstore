import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// GET (read) to  find only one prompt
export const GET = async (req, {params}) => {
    //the params prop added at the top is to make inclusion for the ID
    try {
        await connectToDB();
        const prompt = await Prompt.findById(params.id).populate('creator');
        // Error handling if a prompt is not found
        if(!prompt) return new Response("Prompt not found", { status: 404 })
         // When prompt is found, send it out
        return new Response(JSON.stringify(prompt), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch all prompts", {
            status: 500
        })        
    }
}

// PATCH (update)
export const PATCH = async (req, {params}) => {
    const { prompt, tag } = await request.json(); 
    try {
        await connectToDB();
        const existingPrompt = await Prompt.findById(params.id);

        if(!existingPrompt) {
            return new Response("Prompt not found", {ststus: 404})
        }

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        //save the new edited prompt to the database
        await existingPrompt.save();
        // return new edited prompt in JSON format
        return new Response(JSON.stringify(existingPrompt), { 
            status : 200 
        })                 
    } catch (error) {
        return new Response("Failed to update prompt", {
            status: 500
        })        
    }
}
 
// DELETE(delete)
export const DELETE = async (request, {params}) => {
    try {
         await connectToDB();
         // mongoose method to find documents by ID and preform operations on them, in this case delete them
         await Prompt.findByIdAndRemove(params.id);
         return new Response("Prompt deleted successfully", { status:200 })
    } catch (error) {
        return new Response("Prompt not deleted successfully", { status: 500 })
    }
}