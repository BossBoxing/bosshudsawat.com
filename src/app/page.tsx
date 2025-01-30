import Content from "./component/Content";
import Profile from "./component/Profile";


export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen">
      <Profile />
      <Content />
    </main>
  )
}

