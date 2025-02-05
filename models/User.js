import { Schema, SchemaType, model, models } from 'mongoose';

/**
 * Defining the fields that will be saved into our MongoDB database
 * email - string
 * username - string
 * image - string (coming from google)
 * bookmarks - object id (coming from the properties the user saves)
 */
const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already in use"],
        required: [true, "Email is required"]
    },
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    image: String,
    bookmarks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Property"
        }
    ]
}, {
    timestamps: true
})

const User = models.User || model("User", UserSchema)

export default User;