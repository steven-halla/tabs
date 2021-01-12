import React from 'react';

const TabsView = (props) => {
    // we get this from our tabs.jsx file where we pass tabsview as our
    //selector.
    //and we are coming from props(no idea what that even means).
    const {tabs, selected} = props;


    return(
        <div>
            {
                tabs[selected].content
            }
        </div>
    )
}

export default TabsView ;