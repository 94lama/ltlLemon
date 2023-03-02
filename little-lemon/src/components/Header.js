
function Header () {
    return (
        <header>
            <meta title='Little Lemon Restaurant'
            description='Mediterranean restaurant in Chicago'
            language='english'
            author='Riccardo'
            charset="utf-8"
            http-equiv="refresh"
            content="300"
            name="format-detection"
            HandheldFriendly="true"
            viewport="width=device-width, initial-scale=1.0"
            />
            <meta property="og:title"       content="Little Lemon restaurant" />
            <meta property="og:description" content="Mediterranean restaurant in Chicago" />
            <meta property="og:image"       content="../assets/icons_assets/Logo.svg" />
            <meta property="og:url"         content="www.little-lemon.com" />
            <meta property="og:type"        content="website" />
        </header>
    )
}

export default Header;