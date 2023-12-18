import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        // ref: user means a one to many user relationship, one user can create many prompts
        ref: "User"
    }, 
    prompt: {
        type: String,
        required: [true, "Prompt is required"],
    }, 
    tag: {
        type: String,
        required: [true, "Tag is required"],
    }
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;