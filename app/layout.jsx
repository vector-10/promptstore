import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider"

//edit the metadata of the website, bear in mind that everything placed in the layout file can be shared among all components
export const metadata = {
    title: "Promptstore",
    description: "Discover & Share AI Prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
           <Provider>
           <div className="main">
                <div className="gradient"/>
            </div>

            <main className="app">
                <Nav />
                {children}
            </main>
           </Provider>
        </body>
    </html>
  )
}

export default RootLayout