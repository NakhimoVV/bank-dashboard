import '@/styles'
import { Head } from "minista"
import Header from "@/layouts/Header/index.js";
import Sidebar from "@/layouts/Sidebar/index.js";
import Content from "@/layouts/Content/index.js";

export default function () {
  return (
    <>
      <Head
        htmlAttributes={{ lang: "en" }}
      >
        <meta property="description" content="Project on Vanilla JS with Minista + Vite for use jsx" />
        <title>Bank Dashboard</title>
        <script src="/src/main.js" type="module" />
      </Head>
      <Header />
      <Sidebar />
      <Content />
    </>
  )
}

// TODO: chek card-vertical, line content, dl, avatar, mobile version aside
