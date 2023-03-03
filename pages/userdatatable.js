import Tables from "../components/Tables"
import Usertable from "../lib/userdata"

const userdatatable = () => {


    return (
        <>
            <Tables user={Usertable} />
        </>
    )
}

export default userdatatable;