import { getLinksLinks } from "../utils/data";
import { Link } from "next/link";

// Define a component to display non-social links
const NonSocialLinks = () => {
  // Get data for non-social links
  const nonSocialLinksData = getLinksLinks();

  // Check if the data exists
  if (nonSocialLinksData) {
    // If it does, display the links
    return (
      <section className="grid justify-center">
        {nonSocialLinksData.map((link) => (
          <a className="" href={link.url} key={link.id}>
            <button className="button max-w-md">
              <p>{link.title}</p>
            </button>
          </a>
        ))}
      </section>
    );
  }

  // If the data doesn't exist, display a message
  return <p>No non-social links found.</p>;
};

// Export the component as the default export
export default NonSocialLinks;
