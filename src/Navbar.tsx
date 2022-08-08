import {Link} from "react-router-dom"

export default function Navbar():JSX.Element {
  return (
    <div className="Navbar">
      <Link to="/Career" id="Link">Career</Link>
      <> #add space evenly# </>
      <Link to="/X44" id="Link">X44</Link>
    </div>
  )
}
