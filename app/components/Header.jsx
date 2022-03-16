import { NavLink } from 'remix'

const Header = () => (
    <header className="p-5 bg-blue-500 text-white text-3xl font-bold mb-10">
        <div className="flex">
            <div className="flex-grow flex">Welcome to DanielFrey.me Talks</div>
            <div className="flex-end relative">
                <NavLink to={'/'}> Home</NavLink>
            </div>
        </div>
    </header>
)

export default Header
