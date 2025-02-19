import GoogleProvider from "next-auth/providers/google"
import connectDB from "@/config/database"
import User from "@/models/User"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        })
    ],
    callbacks: {
        // Called on successful sign in
        async signIn({ profile }) {
            // Connect to databse
            await connectDB()
            // Check if user exists
            const userExists = await User.findOne({ email: profile.email })
            // if not, create user
            if (!userExists) {
                // Limit the name to 20 characters
                const userName = profile.name.slice(0, 20)
                await User.create({
                    email: profile.email,
                    username: userName,
                    image: profile.image
                })
            }
            // return true to allow to sign in
            return true;
        },
        // Session callback that modifies the session object
        async session({ session }) {
            // Get user from databse
            const user = await User.findOne({ email: session.user.email })
            // Assign user id from the session
            session.user.id = user._id.toString();
            // Return the session
            return session;
        }
    }
}