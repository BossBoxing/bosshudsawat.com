import AI from "./component/AI";
import Content from "./component/Content";
import Profile from "./component/Profile";
import Experience from "./component/Experience";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen relative">
      <Profile />
      <Content />
      <AI />
    </main>
  )
}