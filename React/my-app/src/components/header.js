function Header() {
  return (
    <div
      style={{
        display: "flex",
        flex: "auto",
        justifyContent: "space-between",
        fontSize: "34px",
        fontWeight: "bolder",
      }}
    >
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3798400/pexels-photo-3798400.jpeg?cs=srgb&dl=pexels-valeriia-miller-3798400.jpg&fm=jpg')",
          padding: "28px",
          color: "white",
        }}
      >
        Logo
      </div>
      <div>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            flex: "auto",
            listStyle: "none",
          }}
        >
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Header;
