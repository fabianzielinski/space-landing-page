function Slider(props) {
  return (
    <div className="img" style={{ backgroundImage: `url(${props.url})` }}>
      <div className="nav row">
        <div className="col-sm-6 col-md-2 arrow-ico">
          <button className="arrow-left">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.5249 12.7288V16.2704H7.27491L17.0145 26.01L14.4999 28.5246L0.474914 14.4996L14.4999 0.474609L17.0145 2.98919L7.27491 12.7288H28.5249Z"
                fill="#23242A"
              />
            </svg>
          </button>
        </div>
        <div className="col-sm-6 col-md-2 arrow-ico">
          <button className="arrow-right">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.474915 12.7288V16.2704H21.7249L11.9853 26.01L14.4999 28.5246L28.5249 14.4996L14.4999 0.474609L11.9853 2.98919L21.7249 12.7288H0.474915Z"
                fill="#23242A"
              />
            </svg>
          </button>
        </div>
        <div className="col-sm-0 col-md-8"></div>
      </div>
    </div>
  );
}

export default Slider;
