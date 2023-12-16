"use client"
import { SessionProvider } from "next-auth/react";
 
 const Provider = ({ children, session }) => {
  // we wrap the component in SessionProvider tags because its a higher order component (HOC)
   return (
     <SessionProvider session={session}>
      {children}
     </SessionProvider>
   )
 }
 
 export default Provider