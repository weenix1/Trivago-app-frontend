const MyNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <img
          src="./cup-straw.svg"
          width={45}
          alt
          className="d-inline-block align-middle mr-2"
        />
        <a className="navbar-brand" href="#">
          Dream Island
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample07"
          aria-controls="navbarsExample07"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#deal-of-the-week">
                Deal of the week
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown07"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Menu
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown07">
                <a className="dropdown-item" href="#welcome-summer">
                  Welcome Summer
                </a>
                <a className="dropdown-item" href="#deal-of-the-week">
                  Deal of the week
                </a>
                <a className="dropdown-item" href="#deal-of-the-day">
                  Deal of the day
                </a>
                <a className="dropdown-item" href="#Last-Minute">
                  Destinations
                </a>
                <a className="dropdown-item" href="#testimonial">
                  Customer Reviews
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-md-0">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default MyNavBar;
