import { getCurrentUser } from "../utils/data";
import Image from "next/image";

// Get the current user's name, email, and avatar
const { name, email, avatar } = getCurrentUser();

// Define a component to display the top content
const TopContent = () => {
  // Use a grid layout to center the content
  return (
    <div className="flex flex-col items-center justify-center py-8">
      {/* Display the user's avatar if it exists */}
      {avatar && (
        <Image
          className="rounded-full mb-4"
          src={avatar}
          alt={name}
          height="150"
          width="150"
        />
      )}

      {/* Display the user's name if it exists */}
      {name && <h1 className="text-3xl font-bold mb-2">{name}</h1>}

      {/* Display the user's email if it exists */}
      {email && <p className="text-lg font-medium">{email}</p>}
    </div>
  );
};

// Export the component as the default export
export default TopContent;
