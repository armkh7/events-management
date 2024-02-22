import { Link } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

function MainHeader() {

  const { signOut } = useAuthenticator((context) => [context.user])

  return (
    <div className="bg-white shadow-md">
      <header className="container mx-auto py-4 flex items-center justify-between">
        <Link to="/" className="mr-4">Events Management</Link>
        <div className="flex justify-center items-center">
          <Link to="/create-event" className="mr-4">Create Event</Link>
          <button 
            onClick={signOut}
            className="text-blue-500 hover:text-blue-700 h-auto flex items-center px-6 py-1.5 bg-transparent border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white tracking-wider"
          >
            Sign Out
          </button>
        </div>
      </header>
    </div>
  )
}

export default MainHeader;
