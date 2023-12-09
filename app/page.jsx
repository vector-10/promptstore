 import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center ">
            Discover and Share 
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> Readily Engineered AI Prompts </span>
        </h1>
        <p className="desc text-center">
            Prompstore is an open-source collaborative prompt
             sharing web application that enables users create, 
             explore and share intelligently crafted prompts 
             for AI responses.
        </p>

        {/* Feed */}
        <Feed/>
    </section>
  )
}

export default Home  