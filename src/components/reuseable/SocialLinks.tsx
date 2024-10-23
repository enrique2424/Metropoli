import { FC } from 'react';

// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================

const links = [
  { id: 1, icon: 'uil uil-twitter', url: 'https://twitter.com/gobsantacruz' },
  { id: 2, icon: 'uil uil-facebook-f', url: 'https://www.facebook.com/GobSantaCruz/' },
  { id: 3, icon: 'uil uil-dribbble', url: 'https://www.santacruz.gob.bo' },
  { id: 4, icon: 'uil uil-instagram', url: 'https://www.instagram.com/gobsantacruz/' },
  { id: 5, icon: 'uil uil-youtube', url: 'https://www.youtube.com/user/Gobdeptalautonomo' }
];

const SocialLinks: FC<SocialLinksProps> = ({ className = 'nav social social-white mt-4' }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer">
          <i className={icon} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
