
function Layout (prop:any){
    const {children} = prop
    return <div>
        <h1>Header</h1>
            {children}
        <h1>Footer</h1>
    </div>
}

export default Layout