import NBBCSS from './NavBackButton.module.css'

const NavBackButton = () => {
    return (
        <div>
            <div className={NBBCSS.nav}>
                <div className={NBBCSS.container}>
                    <button><i class="fas fa-chevron-left"></i></button>
                </div>
            </div>
        </div>
    )
}

export default NavBackButton
