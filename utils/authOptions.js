import GoogleProvider from "next-auth/providers/google"

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
        async singIn({ profile }) {
            // Connect to databse
            // Check if user exists
            // if not, create user
            // return true to allow to sign in
        },
        // Session callback that modifies the session object
        async session({ session }) {
            // Get user from databse
            // Assign user id from the session
            // Return the session
        }
    }
}