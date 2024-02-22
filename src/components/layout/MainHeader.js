import { useAuthenticator } from "@aws-amplify/ui-react";

function MainHeader() {

  const { signOut } = useAuthenticator((context) => [context.user])

  return (
    <div className="bg-white shadow-md">
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="font-bold">Events Management</h1>
        <button 
          onClick={signOut}
          className="text-blue-500 hover:text-blue-700 h-auto flex items-center px-6 py-1.5 bg-transparent border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white tracking-wider"
        >
          Sign Out
        </button>
      </header>
    </div>
  )
}

export default MainHeader;
