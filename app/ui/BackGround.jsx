

  const CurvedBackground = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      width="100%"
      height="100%"
    >
      <path
        d="M0 55 T 100 30, 400 20 T 800 10 V 800 H 0 Z"
        fill="url(#grad)"
      ></path>

      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#1c1917", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#27272a", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CurvedBackground;


