// This particular backend route serves the profile page, it fetches the posts of a particular user by the ID and then displays them.
import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        // the params property passed as a prop and then sent into the .find() method
        // method enables us to fetch the posts of a particular creator only
        const prompts = await Prompt.find({
            creator: params.id
        }).populate('creator');
        return new Response(JSON.stringify(prompts), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch all prompts", {
            status: 500
        })        
    }
}