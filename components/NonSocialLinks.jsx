import { getLinksLinks } from "../utils/data";

const nonSocialLinksData = getLinksLinks();

const LinksLinks = () => {
  return (
    <div className="barge flex flex-col my-3 py-3">
      {nonSocialLinksData.map(({ id, title, url }) => {
        return (
          <a
            key={id}
            title={title}
            target="_blank"
            rel="noopener noreferrer"
            href={url}
            className="button"
          >
            {title}
          </a>
        );
      })}
    </div>
  );
};

export default LinksLinks;
