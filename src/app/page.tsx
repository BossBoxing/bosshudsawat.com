import Content from "./component/Content";
import Profile from "./component/Profile";
import NavigationSidebar from "./component/navigation/NavigationSidebar";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen">
      {/* Profile Section */}
      <Profile />
      
      {/* Content Section */}
      <Content />
      
      {/* Navigation Sidebar - Only visible on lg+ screens */}
      <div className="hidden lg:flex">
        <NavigationSidebar />
      </div>
    </main>
  )
}