import ganeshaLogo from "../../../public/ganeshaLogo.png"
function NavBar() {
  return (
    <div className="w-full h-20 max-h-20 bg-gray-700 fixed  flex justify-around items-center">
      <img src={ganeshaLogo} className="max-h-20 "/>
      <div>Neelakanatanahlli</div>
      <button>Login</button>
    </div>
  );
}

export default NavBar;