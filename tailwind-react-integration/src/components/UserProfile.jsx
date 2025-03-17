function UserProfile() {

    return (
      <div className="bg-gray-100 md:p-8 sm:p-4 max-w-sm-400 mx-auto my-20 rounded-lg shadow-lg">
        <img className="rounded-full w-36 h-36 mx-auto" src="https://via.placeholder.com/150" alt="User"/>
        <h1 className="text-xl sm:text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
        <p className="text-gray-600 text-base sm:text-sm">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;