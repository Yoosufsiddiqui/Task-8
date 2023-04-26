import { getSocialLinks } from "../utils/data";
import Image from "next/image";
import facebookIcon from "../images/facebook.svg";
import twitterIcon from "../images/twitter.svg";
import instagramIcon from "../images/instagram.svg";
import snapchatIcon from "../images/snapchat.svg";

const SocialLinks = () => {
  const socialLinksData = getSocialLinks();

  // Remove console log statement

  if (socialLinksData && socialLinksData.length > 0) {
    // Update class name to be more specific and add padding to the container
    return (
      <section className="social-links-container flex justify-center py-4 items-center">
        {socialLinksData.map((link) => {
          let icon;
          switch (link.title) {
            case "Facebook":
              icon = facebookIcon;
              break;
            case "Twitter":
              icon = twitterIcon;
              break;
            case "Instagram":
              icon = instagramIcon;
              break;
            case "Snapchat":
              icon = snapchatIcon;
              break;
            default:
              // Use null instead of a <p> element for unknown links
              return null;
          }
          return (
            // Add key prop to fix console warning
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={icon}
                alt={link.title}
                height="48"
                width="48"
                // Add border radius to the icon image
                className="rounded-full"
              />
            </a>
          );
        })}
      </section>
    );
  }

  return <p>No social links found.</p>;
};

export default SocialLinks;
