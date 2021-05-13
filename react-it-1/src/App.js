import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">This Header!!!</header>
      <nav className="nav">
        <div>
          <a href="">Profile</a>
        </div>
        <div>
          <a href="">Messages</a>
        </div>
        <div>
          <a href="">New</a>
        </div>
        <div>
          <a href="">Music</a>
        </div>
        <div>
          <a href="">Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img
            src="https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg"
            alt=""
          />
        </div>
        <div>
          avatar + discription
          {/* <img
            src="https://seeklogo.com/images/I/IMG-logo-931DB0D0DA-seeklogo.com.gif"
            alt=""
          /> */}
        </div>
        <div>
          my post
          <div>new post</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
