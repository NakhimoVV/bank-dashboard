import "@/styles"
import { Head } from "minista"
import Header from "@/layouts/Header"
import Sidebar from "@/layouts/Sidebar"
import Content from "@/layouts/Content"

export default function () {
  return (
    <>
      <Head htmlAttributes={{ lang: "en" }}>
        <meta
          property="description"
          content="Project on Vanilla JS with Minista + Vite for use jsx"
        />
        <title>Bank Dashboard</title>
        <script src="/src/main.js" type="module" />
      </Head>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <Content />
      </div>
    </>
  )
}
