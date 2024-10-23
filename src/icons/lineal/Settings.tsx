import IconProps from 'types/icon';

const Settings = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`svg-inject icon-svg ${className || 'icon-svg-sm text-primary me-4'}`}
    >
      <circle className="lineal-fill" cx="256" cy="256" r="112.5" />
      <path
        className="lineal-stroke"
        d="M256 382.6c-69.9 0-126.6-56.7-126.6-126.6S186.1 129.4 256 129.4 382.6 186.1 382.6 256c-.1 69.9-56.7 126.5-126.6 126.6zm0-225.1c-54.4 0-98.5 44.1-98.5 98.5s44.1 98.5 98.5 98.5 98.5-44.1 98.5-98.5c-.1-54.4-44.1-98.4-98.5-98.5z"
      />
      <path
        className="lineal-stroke"
        d="M279.4 512h-46.8c-16.2 0-29.4-13.2-29.4-29.4v-19.2c-19.9-5-38.9-12.9-56.5-23.4l-13.6 13.6c-5.5 5.5-14.4 5.5-19.9 0s-5.5-14.4 0-19.9l21.6-21.5c4.8-4.8 12.2-5.5 17.8-1.7 20.4 13.7 43.3 23.2 67.5 27.9 6.6 1.3 11.4 7.1 11.4 13.8v30.5c0 .7.6 1.3 1.3 1.3h46.8c.7 0 1.3-.6 1.3-1.3v-30.5c0-6.7 4.8-12.5 11.4-13.8 24.1-4.7 47.1-14.2 67.5-28 5.6-3.7 13-3 17.8 1.7l21.5 21.5c.5.5 1.3.5 1.8 0l33.1-33.1c.5-.5.5-1.3 0-1.8l-21.5-21.5c-4.8-4.8-5.5-12.2-1.7-17.8 13.8-20.4 23.3-43.3 28-67.5 1.3-6.6 7.1-11.4 13.8-11.4h30.5c.7 0 1.3-.6 1.3-1.3v-46.8c0-.7-.6-1.3-1.3-1.3h-30.5c-6.7 0-12.5-4.8-13.8-11.4-4.7-24.1-14.3-47.1-28-67.5-3.7-5.6-3-13 1.7-17.8l21.5-21.6c5.6-5.4 14.5-5.2 19.9.3 5.3 5.5 5.3 14.1 0 19.6l-13.9 14c10.5 17.6 18.4 36.7 23.4 56.6h19.2c16.2 0 29.3 13.2 29.4 29.4v46.8c0 16.2-13.2 29.4-29.4 29.4h-19.2c-5 19.9-12.9 38.9-23.4 56.5l13.6 13.6c11.5 11.5 11.5 30.1 0 41.6l-33.1 33.1c-11.5 11.5-30.1 11.5-41.6 0L365.3 440a211.57 211.57 0 01-56.5 23.4v19.2c-.1 16.3-13.2 29.4-29.4 29.4zm-211-109.1c-7.8 0-14.1-6.3-14-14.1 0-3.7 1.5-7.3 4.1-9.9L72 365.3a211.57 211.57 0 01-23.4-56.5H29.4C13.2 308.8 0 295.6 0 279.4v-46.8c0-16.2 13.2-29.4 29.4-29.4h19.2c5-19.9 12.9-38.9 23.4-56.5l-13.6-13.6C47 121.6 47 103 58.4 91.5l33.1-33.1c11.5-11.5 30.1-11.5 41.6 0L146.7 72c17.6-10.5 36.7-18.4 56.5-23.4V29.4c0-16.2 13.2-29.4 29.4-29.4h46.8c16.2 0 29.4 13.2 29.4 29.4v19.2c19.9 5 38.9 12.9 56.5 23.4l13.6-13.6c5.5-5.5 14.4-5.5 19.9 0s5.5 14.4 0 19.9l-21.5 21.6c-4.8 4.8-12.2 5.5-17.8 1.7-20.4-13.7-43.3-23.2-67.5-28-6.6-1.3-11.4-7.1-11.4-13.8V29.4c0-.7-.6-1.3-1.3-1.3h-46.8c-.7 0-1.3.6-1.3 1.3v30.5c0 6.7-4.8 12.5-11.4 13.8-24.1 4.7-47.1 14.2-67.5 28-5.6 3.8-13 3-17.8-1.7L113 78.4c-.5-.5-1.3-.5-1.8 0l-33.1 33.1c-.5.5-.5 1.3 0 1.8l21.6 21.6c4.8 4.8 5.5 12.2 1.7 17.8-13.8 20.4-23.3 43.3-28 67.5-1.3 6.6-7.1 11.4-13.8 11.4H29.4c-.7 0-1.3.6-1.3 1.3v46.8c0 .7.6 1.3 1.3 1.3h30.5c6.7 0 12.5 4.8 13.8 11.4 4.7 24.1 14.2 47.1 28 67.5 3.7 5.6 3 13-1.7 17.8l-21.6 21.5c-2.7 2.3-6.3 3.7-10 3.7z"
      />
    </svg>
  );
};

export default Settings;
