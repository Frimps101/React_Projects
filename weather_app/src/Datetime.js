const Datetime = () => {
    const showDate = new Date()
    const displayCurrentDate = `${showDate.getDate()}/${showDate.getMonth}/${showDate.getFullYear}`

    return(
        <div>
            <input type="text" value={displayCurrentDate} readOnly="true"/>
        </div>
    )
}

export default Datetime;