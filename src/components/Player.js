function Player(props) {
  return (
    <div className="player">
      <div className="img" style={{ backgroundImage: `url(${props.film})` }}>
        <div className="icoPlayer">
          <svg
            width="66"
            height="74"
            viewBox="0 0 66 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M62.0022 31.8041C66.0016 34.1136 66.0016 39.8864 62.0022 42.1959L9.00044 72.8025C5.00044 75.1124 -3.33193e-06 72.2257 -3.13003e-06 67.6067L-4.54307e-07 6.39333C-2.52403e-07 1.7743 5.00044 -1.11242 9.00045 1.19744L62.0022 31.8041Z"
              fill="#23242A"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Player;
